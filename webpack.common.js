const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-[hash].js"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle-[hash].css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "index.html"),
      filename: path.resolve(__dirname, "dist", "index.html"),
      title: "主控臺"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "users", "index.html"),
      filename: path.resolve(__dirname, "dist", "users", "index.html"),
      title: "使用者管理"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "users", "new.html"),
      filename: path.resolve(__dirname, "dist", "users", "new.html"),
      title: "新增使用者"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "html", "users", "edit.html"),
      filename: path.resolve(__dirname, "dist", "users", "edit.html"),
      title: "編輯使用者"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader'
      }
    ]
  }
}