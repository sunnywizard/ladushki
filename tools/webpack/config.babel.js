import path from 'path';
import webpack from 'webpack';
import ManifestPlugin from 'webpack-manifest-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import WorkboxPlugin from 'workbox-webpack-plugin';
import WebpackPwaManifest from 'webpack-pwa-manifest';

const nodeEnv = process.env.NODE_ENV || 'development';
const isDev = nodeEnv === 'development';
const isTest = nodeEnv === 'testing';
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// Enable/disable css modules here
const USE_CSS_MODULES = false;
// Setup the plugins for development/production
const getPlugins = () => {
  // Common
  const plugins = [
    new ManifestPlugin({
      fileName: path.resolve(process.cwd(), 'public/webpack-assets.json'),
      filter: file => file.isInitial
    }),
    new LoadablePlugin({
      writeToDisk: true,
      filename: '../loadable-stats.json'
    }),
    new MiniCssExtractPlugin({
      // Don't use hash in development, we need the persistent for "renderHtml.js"
      filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
      chunkFilename: isDev ? '[id].chunk.css' : '[id].[contenthash:8].chunk.css'
    }),
    // Setup enviorment variables for client
    new webpack.EnvironmentPlugin({ NODE_ENV: JSON.stringify(nodeEnv) }),
    // Setup global variables for client
    new webpack.DefinePlugin({
      __CLIENT__: true,
      __SERVER__: false,
      __DEV__: isDev,
      __TEST__: isTest,
    }),
new webpack.LoaderOptionsPlugin({
  // test: /\.xxx$/, // may apply this only for some modules
  options: {
    presets: [
      ["@babel/preset-env", {
        /* ... */
        "loose": true,
      }]
    ],
  },
}),

new webpack.IgnorePlugin({
  resourceRegExp: /^\.\/locale$/,
  contextRegExp: /moment$/,
}),
new webpack.optimize.OccurrenceOrderPlugin()
  ];

  if (isDev) {
    // Development
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new FriendlyErrorsWebpackPlugin(),
    );
  } else {
    plugins.push(
      // Production
      new webpack.HashedModuleIdsPlugin(),
      new CompressionPlugin({
        test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
        threshold: 10240,
        minRatio: 0
      }),
      // Minimizing style for production
      new OptimizeCssAssetsPlugin(),
      // Visualize all of the webpack bundles
      // Check "https://github.com/webpack-contrib/webpack-bundle-analyzer#options-for-plugin"
      // for more configurations
      new BundleAnalyzerPlugin({
        analyzerMode: process.env.NODE_ENV === 'analyze' ? 'server' : 'disabled'
      }),
      new WorkboxPlugin.GenerateSW({
        runtimeCaching: [
          {
            urlPattern: /assets/,
            handler: 'CacheFirst'
          },
          {
            urlPattern: /.*/,
            handler: 'NetworkFirst'
          }
        ],
        swDest: '../service-worker.js',
      }),
      new WebpackPwaManifest({
        filename: '../manifest.json',
        name: 'LADUSHKI',
        short_name: 'LADUSHKI',
        description: 'LADUSHKI',
        background_color:'#ffffff',
        theme_color:'#ffffff',
        start_url: '/',
        icons: [
          {
            src: path.resolve('src/theme/images/icon.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('images', 'icons')
          }
        ]
      }),
    );
  }

  return plugins;
};

// Setup the entry for development/prodcution
const getEntry = () => {
  // Development
  let entry = ['webpack-hot-middleware/client?reload=true', './src/client.js'];

  // Prodcution
  if (!isDev) entry = ['./src/client.js'];

  return entry;
};

// Webpack configuration
module.exports = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : 'hidden-source-map',
  context: path.resolve(process.cwd()),
  entry: getEntry(),
  optimization: {
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      // new CompressionPlugin(),
      new CompressionPlugin({
        test: /\.jsx?$|\.css$|\.(scss|sass)$|\.html$/,
        threshold: 10240,
        minRatio: 0
      }),
      new CssMinimizerPlugin(),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      }),
      //  new TerserPlugin(),
      // new TerserPlugin({
      //   terserOptions: {
      //     mangle: true,
      //     compress: false,
      //     format: {
      //       comments: false,
      //     },
      //   },
      //   extractComments: false,
      // }),
    ],

    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },

  },

   output: {
    path: path.resolve(process.cwd(), 'public/assets'),
    publicPath: '/assets/',
    // Don't use chunkhash in development it will increase compilation time
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[id].chunk.js' : '[id].[chunkhash:8].chunk.js',
    pathinfo: isDev
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: { cacheDirectory: isDev }
      },
      {
        test: /\.css$/,
        use: [
          'css-hot',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css',
            options: {
              importLoaders: 1,
              modules: USE_CSS_MODULES,
              localIdentName: '[local]--[hash:base64:5]',
              context: path.resolve(process.cwd(), 'src'),
              sourceMap: true
            }
          },
          { loader: 'postcss', options: { sourceMap: true } }
        ]
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'css-hot',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css',
            options: {
              importLoaders: 2,
              modules: USE_CSS_MODULES,
              localIdentName: '[local]--[hash:base64:5]',
              context: path.resolve(process.cwd(), 'src'),
              sourceMap: true
            }
          },
          { loader: 'postcss', options: { sourceMap: true } },
          {
            loader: 'sass',
            options: {
              outputStyle: 'expanded',
              sourceMap: true,
              sourceMapContents: !isDev
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|svg|otf)$/,
        loader: 'file',
        options: {
          name: '[path][name].[ext]',
          context: './src/theme',
        },
      },
      {
        test: /\.(gif|png|jpe?g|webp|ico|pdf)$/,
        loader: 'file',
        options: {
          name: '[path][name].[ext]',
          context: './src/theme',
        },
      },
    ]
  },
  plugins: getPlugins(),
  /* Advanced configuration */
  resolveLoader: {
    // Use loaders without the -loader suffix
    moduleExtensions: ['-loader']
  },
  resolve: {
    modules: ['src', 'node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.jsx', '.json']
  },
  cache: isDev,
  node: {
    fs: 'empty',
    vm: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  stats: {
    entrypoints: false,
    children: false,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
