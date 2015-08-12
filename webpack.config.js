var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + "/app",
  entry: {
   javascript: "./App.js",
   html: "./index.html"
  },
  output: {
    filename: 'app.js',
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  },
  plugins: [new ExtractTextPlugin("client.css")]
}
