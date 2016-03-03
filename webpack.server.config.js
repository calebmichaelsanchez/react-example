var fs           = require("fs");
var path         = require("path");
var autoprefixer = require("autoprefixer");
var precss       = require("precss");

module.exports = {
  entry: path.resolve(__dirname, "server.js"),

  output: {
    path: 'public/',
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
      { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css!postcss!resolve-url!sass' },
      {
        test: /\.(jpe?g|png|gif|ico|mp4|webm|ogv)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=/[path][name].[ext]'
      }
    ]
  }

}
