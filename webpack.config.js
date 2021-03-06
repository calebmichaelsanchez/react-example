var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer      = require('autoprefixer');
var precss            = require('precss');
var definePlugin      = new webpack.DefinePlugin({
  NODE_ENV: process.env.NODE_ENV === 'production' ? 'production' : 'development'
});

module.exports = {
  entry: './app/index.js',

  output: {
    path       : '../public',
    filename   : '/bundle.js',
    publicPath : ''
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", exclude: '/node_modules/'}
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(svg)$/, exclude: /node_modules/, loader: 'raw-loader' },
      { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!resolve-url!sass') },
      {
        test: /\.(jpe?g|png|gif|ico|mp4|webm|ogv)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=/[path][name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json']
  },

  postcss: function () {
    return [autoprefixer, precss];
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin("/app/stylesheets/index.css")
    // new HtmlWebpackPlugin({
    //   title    : 'Underbelly Creative',
    //   template : './index.html',
    //   inject   : 'body',
    //   filename : 'index.html'
    // })
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("/app/stylesheets/index.css"),
    new HtmlWebpackPlugin({
      title    : 'Underbelly Creative',
      template : './index.html',
      inject   : 'body',
      filename : 'index.html'
    })
  ],
  eslint: {
    configFile: './.eslintrc'
  }
};

