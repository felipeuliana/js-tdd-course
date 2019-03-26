const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './main.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './example')
  },
  module: {
    rules: [{
      exclude: ['/node_modules'],
      use: [{
        loader: 'babel-loader'
      }],
      test: /\.js$/,
    }]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './example'),
  },
};
