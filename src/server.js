import path from 'path';
import logger from 'morgan';
import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import hpp from 'hpp';
import favicon from 'serve-favicon';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import Helmet from 'react-helmet';
import chalk from 'chalk';
import cookieParser from 'cookie-parser';
import acceptLanguage from 'accept-language';
import configureStore from './core/utils/configurestore';
import renderHtml from './core/utils/renderHtml';
import routes from './routes';
import config from './config';
import ConnectedIntlProvider from './core/connectors/intlprovider';
import { setLocale } from './core/actions/locale';

const app = express();

app.use(helmet());
app.use(hpp());
app.use(compression());
app.use(cookieParser());
app.use(logger('dev', { skip: (req, res) => res.statusCode < 400 }));
app.use(favicon(path.resolve(process.cwd(), 'src/theme/images/favicon.ico')));

const detectLang = (req) => {
  const cookieLang = req.cookies.lang;
  return acceptLanguage.get(cookieLang || req.headers['accept-language']) || 'ru';
};

if (!__DEV__) {
  app.use(express.static(path.resolve(process.cwd(), 'public')));

} else {
  const webpack = require('webpack');
  const webpackConfig = require('../tools/webpack/config.babel');
  const compiler = webpack(webpackConfig);
  compiler.apply(new webpack.ProgressPlugin());

  app.use(
    require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      headers: { 'Access-Control-Allow-Origin': '*' },
      hot: true,
      quiet: true, // Turn it on for friendly-errors-webpack-plugin
      noInfo: true,
      writeToDisk: true,
      stats: 'minimal',
      serverSideRender: true
    })
  );

  app.use(
    require('webpack-hot-middleware')(compiler, {
      log: false // Turn it off for friendly-errors-webpack-plugin
    })
  );
}

app.get('*', (req, res) => {
  const { store } = configureStore({ url: req.url });
  const lang = detectLang(req);

  const loadBranchData = () => {
    const branch = matchRoutes(routes, req.path);
    const promises = branch.map(({ route, match }) => {
      if (route.loadData) {
        return Promise.all(
          route
            .loadData({ params: match.params, getState: store.getState })
            .map(item => store.dispatch(item))
        );
      }
      return Promise.resolve(null);
    });
    return Promise.all(promises);
  };

  (async () => {
    try {
      await loadBranchData();
      const statsFile = path.resolve(process.cwd(), 'public/loadable-stats.json');
      const extractor = new ChunkExtractor({ statsFile });
      const staticContext = {};
      store.dispatch(setLocale(lang));

      const AppComponent = (
        <ChunkExtractorManager extractor={extractor}>
          <Provider store={store}>
            <ConnectedIntlProvider>
              <StaticRouter location={req.path} context={staticContext}>
                {renderRoutes(routes)}
              </StaticRouter>
            </ConnectedIntlProvider>
          </Provider>
        </ChunkExtractorManager>
      );

      const initialState = store.getState();
      const htmlContent = renderToString(AppComponent);
      const head = Helmet.renderStatic();

      if (staticContext.url) {
        res.status(301).setHeader('Location', staticContext.url);
        res.end();
        return;
      }

      const status = staticContext.status === '404' ? 404 : 200;

      res
        .status(status)
        .send(renderHtml(head, extractor, htmlContent, initialState, lang));

    } catch (err) {
      res.status(404).send('Not Found :(');
      console.error(chalk.red(`==> 😭  Rendering routes error: ${err}`));
    }
  })();
});

if (config.port) {
  app.listen(config.port, config.host, (err) => {
    const url = `http://${config.host}:${config.port}`;
    if (err) console.error(chalk.red(`==> 😭  OMG!!! ${err}`));
    console.info(chalk.green(`==> 🌎  Listening at ${url}`));
  });
} else {
  console.error(
    chalk.red('==> 😭  OMG!!! No PORT environment variable has been specified')
  );
}
