var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: "./app/App.js",
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_componets)/,
        loader: 'babel'
      }
    ]
  },
  plugins: [new ExtractTextPlugin("public/client.css")]
}
