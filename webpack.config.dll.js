const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "production",
  entry: {
    modules: ["html-webpack-plugin"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]",
      path: path.join(__dirname, "[name]-manifest.json")
    })
  ]
};
