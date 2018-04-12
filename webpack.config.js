const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssLoaders = [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"];

module.exports = {
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, {
      test: /\.html$/,
      use: [{
        loader: "html-loader",
        options: { minimize: true }
      }]
    }, {
      test: /\.css$/,
      use: cssLoaders
    }, {
      test: /\.scss$/,
      use: [...cssLoaders, "sass-loader"]
    }]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
