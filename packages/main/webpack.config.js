process.env.BABEL_ENV = "production";

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const { dependencies } = require("./package.json");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.join(__dirname, "public"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3001,
  },
  output: {
    publicPath: "auto",
    crossOriginLoading: "anonymous",
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        media: "media@http://localhost:3002/remoteEntry.js",
      },
      exposes: {
        "./AppLayout": "./src/components/AppLayout",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "@mf/shared": {
          import: "@mf/shared",
          requiredVersion: require("../shared/package.json").version,
        },
        "@mf/flamingo": {
          import: "@mf/flamingo",
          requiredVersion: require("../flamingo/package.json").version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
};
