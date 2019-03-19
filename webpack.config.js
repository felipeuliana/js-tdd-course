const path = require('path');
const include = path.join(__dirname, 'src');

module.exports = {
  devtool: 'source-map',
  entry: './src/index',
  module: {
    rules: [
    {
      include,
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  output: {
    library: 'spotifyWrapper',
    libraryTarget: 'umd',
    path: include
  }
};
