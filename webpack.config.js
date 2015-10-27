var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pkg = require('./package.json');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ASSET_PATH = path.resolve(ROOT_PATH, 'assets');
var SCSS_PATH = path.resolve(ROOT_PATH, 'stylesheets');
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');

process.env.BABEL_ENV = TARGET;

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        exclude: NODE_PATH
      },
      { test: /\.(svg)$/,
        include: path.resolve(ROOT_PATH, 'app/components/globals/icons'),
        loader: 'raw-loader'
      },
      { test: /\.(mp4|webm|ogv)$/, exclude: NODE_PATH, loader: 'file-loader?name=[path][name].[ext]'},
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: NODE_PATH,
        loaders: ['url-loader?name=[path][name].[ext]&limit=10000', 'image-webpack-loader?bypassOnDebug&optimationLevel=7&interlaced=false']
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.xml$/, loader: 'xml-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Underbelly Creative',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  node: {
    console: true,
    fs: 'empty',
    dns: 'empty',
    net: 'empty',
    tls: 'empty',
    xml2js: 'empty'
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.scss$/,
          exclude: NODE_PATH,
          loader: 'style!css!sass?sourceMap'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 9090
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
if(TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      app: APP_PATH,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: BUILD_PATH,
      filename: '[name]/[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        // {
        //   test: /\.scss?$/,
        //   loader: ExtractTextPlugin.extract('style', 'css?root=../../!sass'),
        //   exclude: NODE_PATH
        // }
        {
          test: /\.scss$/,
          exclude: NODE_PATH,
          loader: 'style!css?root=/app!sass?sourceMap'
        }
      ]
    },
    plugins: [
      new Clean(['build']),
      new ExtractTextPlugin('styles/styles.[chunkhash].css'),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        '[name]/[name].[chunkhash].js'
      ),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
          'BROWSER': JSON.stringify(true)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
}