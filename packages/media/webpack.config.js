process.env.BABEL_ENV = "production";

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const { dependencies } = require("../../package.json");

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    hot: true,
    open: true,
    port: 3002,
    static: {
      directory: path.join(__dirname, "public"),
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "media",
      filename: "remoteEntry.js",
      remotes: {
        main: "main@http://localhost:3001/remoteEntry.js",
      },
      exposes: {
        "./WelcomeWidget": "./src/components/WelcomeWidget",
        "./EventsWidget": "./src/components/EventsWidget",
        "./DirectEvents": "./src/components/DirectEvents",
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
        "@mf/core": {
          import: "@mf/core",
          requiredVersion: require("../core/package.json").version,
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
  ],
};
