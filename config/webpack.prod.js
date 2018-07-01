const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin('build'),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ],
  devtool: 'source-map'
});
