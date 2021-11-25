import serialize from 'serialize-javascript';
import { minify } from 'html-minifier';

export default (head, extractor, htmlContent, initialState, lang) => {
  const html = `
    <!doctype html>
    <html lang="${lang}">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!--[if IE]>
          <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
        <![endif]-->
        ${!__DEV__ ? '<link rel="manifest" href="/manifest.json">' : ''}
        ${head.title.toString()}
        ${head.base.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        ${extractor.getLinkTags()}
        ${extractor.getStyleTags()}
      </head>
      <body>
        <div id="react-view">${htmlContent}</div>
        <script>
          window.__INITIAL_STATE__=${serialize(initialState)};
          ${global.__TEST__ && 'window.__TEST__ = true'};
        </script>
        ${!__DEV__ ? `
        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/service-worker.js');
            });
          }
        </script>
        ` : ''}
        ${extractor.getScriptTags()}
        ${head.script.toString()}
      </body>
    </html>
  `;

  const minifyConfig = {
    collapseWhitespace: true,
    removeComments: true,
    trimCustomFragments: true,
    minifyCSS: true,
    minifyJS: true,
    minifyURLs: true
  };

  return __DEV__ ? html : minify(html, minifyConfig);
};
