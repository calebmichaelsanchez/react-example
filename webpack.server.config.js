var fs = require("fs")
var path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "server.js"),

  output: {
    filename: 'server.bundle.js'
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
      { test: /\.json$/, loader: 'json-loader' }
    ]
  }

}
