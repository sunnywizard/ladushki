/* Require hooks for server-side */

const sass = require('node-sass');
const path = require('path');
const postcssConfig = require('../../postcss.config');

const contextPath = path.resolve(process.cwd(), 'src/theme');

function publicPathHandler(fileName) {
  const relativePath = path.relative(contextPath, fileName).replace(/\\/g, '/');
  return `/assets/${relativePath}`;
}

module.exports = () => {
  // CSS modules
  require('css-modules-require-hook')({
    generateScopedName: '[local]',
    extensions: ['.css', '.scss', '.sass'],
    prepend: [...postcssConfig.plugins],
    preprocessCss: (data, filename) => sass.renderSync({
      data,
      file: filename,
    }).css,
    rootDir: path.resolve(process.cwd(), 'src'),
    devMode: __DEV__,
  });

  // Images
  require('asset-require-hook')({
    extensions: ['gif', 'jpg', 'jpeg', 'png', 'webp', 'ico', 'pdf'],
    publicPath: publicPathHandler,
    limit: 10240,
    name: '[path][name].[ext]',
  });

  // Fonts
  require('asset-require-hook')({
    extensions: ['woff', 'woff2', 'ttf', 'eot', 'svg', 'otf'],
    publicPath: publicPathHandler,
    limit: 10240,
    name: '[path][name].[ext]',
  });
};
