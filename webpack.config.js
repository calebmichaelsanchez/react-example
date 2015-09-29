var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app'),
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: path.resolve(ROOT_PATH, 'app'),
        loader: 'style!css!sass'
      },
      { test: /\.(svg)$/, include: path.resolve(ROOT_PATH, 'app'), loader: 'raw'},
      {
        test: /\.(png|jpg)$/,
        include: path.resolve(ROOT_PATH, 'app'),
        loader: 'url?limit=25000'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Underbelly Creative',
      template: 'index.html',
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
          test: /\.jsx?$/,
          loaders: ['babel'],
          include: path.resolve(ROOT_PATH, 'app')
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