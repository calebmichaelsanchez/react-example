var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

module.exports = {
  entry: './app/index.js',

  output: {
    path: 'public',
    filename: '/bundle.js',
    publicPath: ''
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(svg)$/, exclude: /node_modules/, loader: 'raw-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!postcss!resolve-url!sass' },
      { test: /\.(jpe?g|png|gif|ico|mp4|webm|ogv)$/, exclude: /node_modules/, loader: 'file-loader?name=/[path][name].[ext]' }
    ]
  },

  postcss: function () {
    return [autoprefixer, precss];
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Underbelly Creative',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Underbelly Creative',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ]
}

