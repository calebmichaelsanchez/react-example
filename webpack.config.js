var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.jsx$/, loader: 'jsx-loader'},
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("client.css")
  ]
}
