const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3002,
  },
  output: {
    publicPath: "auto",
  },
  resolve: {
    extensions: [".jsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "media",
      filename: "remoteEntry.js",
      exposes: {
        "./Welcome": "./src/Welcome",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "17.0.2",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "17.0.2",
        },
        "shared-context": {
          import: "shared-context",
          requiredVersion: require("../shared-context/package.json").version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
