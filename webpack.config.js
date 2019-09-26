const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/bunde.js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".styl"]
  },
  devServer: {
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          "css-loader"
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes
          },
          {
            loader: "css-loader" // CSS --> CommonJS
          },
          {
            loader: "stylus-loader" // Compiles Styl --> CSS
          }
        ]
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new MiniCSSExtractPlugin({
      filename: "css/[name].css"
    })
  ]
};
