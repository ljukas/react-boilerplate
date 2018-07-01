const common = require("./webpack.common.js");
const merge = require("webpack-merge");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  plugins: [new CleanWebpackPlugin("build")],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true
      })
    ]
  },
  devtool: "source-map"
});
