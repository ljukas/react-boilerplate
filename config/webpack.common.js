const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name]-bundle-[chunkhash].js",
    path: path.resolve(__dirname, "../build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]__[hash:base64]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, "src/ui"),
      screens: path.resolve(__dirname, "src/screens"),
      components: path.resolve(__dirname, "src/components"),
      queries: path.resolve(__dirname, "src/queries"),
      mutations: path.resolve(__dirname, "src/mutations")
    }
  }
};
