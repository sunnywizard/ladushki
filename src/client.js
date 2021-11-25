import React from 'react';
import ReactDOM from 'react-dom';
import Cookie from 'js-cookie';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import ConnectedIntlProvider from './core/connectors/intlprovider';
import configureStore from './core/utils/configurestore';
import routes from './routes';
import { setLocale } from './core/actions/locale';
import { getSelf } from './core/actions/session';
import './theme/styles/styles.scss';

const initialState = window.__INITIAL_STATE__;
const { store, history } = configureStore({ initialState });

const lang = Cookie.get('lang') || 'ru';
store.dispatch(setLocale(lang));

store.dispatch(getSelf('Init'));

const render = Routes => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <AppContainer>
      <Provider store={store}>
        <ConnectedIntlProvider>
          <ConnectedRouter history={history}>
            {renderRoutes(Routes)}
          </ConnectedRouter>
        </ConnectedIntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('react-view')
  );
};

render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    try {
      const nextRoutes = require('./routes').default;
      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
