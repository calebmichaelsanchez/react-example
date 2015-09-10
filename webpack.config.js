var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/App.jsx')],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'react-hot!babel', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
      },
      { test: /\.(svg)$/, loader: 'raw-loader'},
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
