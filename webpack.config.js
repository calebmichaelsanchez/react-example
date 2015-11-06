var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var pkg = require('./package.json');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var ASSET_PATH = path.resolve(ROOT_PATH, 'assets');
var SCSS_PATH = path.resolve(ROOT_PATH, 'stylesheets');
var NODE_PATH = path.resolve(ROOT_PATH, 'node_modules');
var SERVER_PATH = path.resolve(ROOT_PATH, 'index.js');

process.env.BABEL_ENV = TARGET;

var nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

var common = {
  entry: APP_PATH,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: '/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: APP_PATH
      },
      { test: /\.(svg)$/,
        include: path.resolve(ROOT_PATH, 'app/components/globals/icons'),
        loader: 'raw-loader'
      },
      { test: /\.(mp4|webm|ogv)$/, include: APP_PATH, loader: 'file-loader?name=/[path][name].[ext]'},
      {
        test: /\.(jpe?g|png|gif)$/,
        include: APP_PATH,
        loaders: ['url-loader?name=/[path][name].[ext]&limit=100', 'image-webpack-loader?bypassOnDebug&optimationLevel=7&interlaced=false']
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.xml$/, loader: 'xml-loader' },
      { test: /\.ico$/, loader: 'file-loader?name=/[path][name].[ext]' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Underbelly Creative',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    })
  ],
  node: {
    console: true,
    fs: 'empty',
    dns: 'empty',
    net: 'empty',
    tls: 'empty',
    xml2js: 'empty'
  }
};

if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          test: /\.scss$/,
          include: APP_PATH,
          loader: 'style!css!autoprefixer-loader?browsers=last 2 version!sass?sourceMap'
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 9090
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
if(TARGET === 'build') {
  module.exports = [merge(common, {
    entry: {
      app: APP_PATH,
      vendor: Object.keys(pkg.dependencies)
    },
    output: {
      path: BUILD_PATH,
      filename: '/[name]/[name].js'
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.scss$/,
          include: APP_PATH,
          loader: 'style!css?root=/app!autoprefixer-loader?browsers=last 2 version!sass?sourceMap'
        }
      ]
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin( 'vendor', '/[name]/[name].js' ),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development'),
          'BROWSER': JSON.stringify(true)
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  }),
  {
    entry: SERVER_PATH,
    target: "node",
    output: {
      path: BUILD_PATH,
      filename: 'index.js'
    },
    node: {
      __dirname: true
    },
    externals: nodeModules,
    module: {
      loaders: [
        { test: /\.json$/, loader: 'json-loader' }
      ]
    },
    devtool: 'sourcemap'
  }]
}