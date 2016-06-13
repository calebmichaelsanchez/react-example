var fs           = require("fs");
var path         = require("path");
var autoprefixer = require("autoprefixer");
var precss       = require("precss");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "server.js"),

  output: {
    path: '../public/',
    filename: '../server.bundle.js',
    publicPath: ''
  },

  target: "node",

  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod
    return ext
  }, {}),

  node: {
    __dirname: true,
    __filename: true
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(svg)$/, exclude: /node_modules/, loader: 'raw-loader' },
      {
        test: /\.(jpe?g|png|gif|ico|mp4|webm|ogv)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=/[path][name].[ext]'
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json']
  }
}
