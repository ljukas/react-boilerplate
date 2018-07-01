const common = require("./webpack.common.js");
const merge = require("webpack-merge");

const OpenBrowserPlugin = require("open-browser-webpack-plugin");

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
  mode: "development",
  plugins: [new OpenBrowserPlugin({ url: `http://localhost:${PORT}` })],
  devServer: {
    host: "0.0.0.0",
    port: PORT,
    quiet: true
  },
  devtool: "inline-source-map"
});
