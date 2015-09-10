var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: path.resolve(__dirname, 'app/App.jsx'),
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },

  module: {
    loaders: [
      { 
        test: /\.jsx?$/, 
        loader: 'react-hot!babel', 
        exclude: /node_modules/ 
      },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.(png|jpg)$/, loader: 'url?limit=25000'}
    ]
  }
}
