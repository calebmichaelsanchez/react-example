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
        include: APP_PATH
      },
      { test: /\.(svg)$/,
        include: path.resolve(ROOT_PATH, 'app/components/globals/icons'),
        loader: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        include: APP_PATH,
        loaders: ['url-loader?prefix=img/&limit=25000', 'image-webpack-loader?bypassOnDebug&optimationLevel=7&interlaced=false']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Underbelly Creative',
      template: './index.html',
      inject: 'body'
    })
  ]
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.scss$/,
          include: APP_PATH,
          loader: 'style!css!sass'
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
      filename: '[name].[chunkhash].js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.scss?$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass-loader'),
          include: APP_PATH
        }
      ]
    },
    plugins: [
      //new Clean(['build']),
      new ExtractTextPlugin('styles.[chunkhash].css'),
      new webpack.optimize.CommonsChunkPlugin(
        'vendor',
        '[name].[chunkhash].js'
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