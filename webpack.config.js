const path = require('path');
const include = path.join(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: './index',
  module: {
    rules: [
    {
      include,
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  output: {
    library: 'SpotifyWrapper',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist')
  }
};
