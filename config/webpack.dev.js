const common = require('./webpack.common.js');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    quiet: true
  },
  devtool: 'inline-source-map'
});
