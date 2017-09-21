const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, 'public');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
  entry: SRC_DIR + '/App.jsx',

  devtool: '#eval',

  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.json/,
        include: SRC_DIR,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        include: SRC_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.styl', '.css'],
    alias: {
      '~': path.resolve(__dirname)
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Stevens Shuttle Tracker',
      template: 'src/index.ejs'
    })
  ]
};
