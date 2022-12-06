process.env.BABEL_ENV = "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 3002,
  },
  output: {
    publicPath: "auto",
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
      name: "media",
      filename: "remoteEntry.js",
      remotes: {
        host: "host@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./Welcome": "./src/Welcome",
        "./Widget": "./src/components/Widget",
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
          requiredVersion: require("../shared-context/package.json").version,
        },
        "@mf/flamingo": {
          import: "@mf/flamingo",
          requiredVersion: require("../library/package.json").version,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
