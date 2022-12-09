process.env.BABEL_ENV = "production";

const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;
const path = require("path");
const { dependencies } = require("../../package.json");

module.exports = {
  mode: "development",
  devServer: {
    port: 3003,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  target: 'web',
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
      name: "shared",
      filename: "remoteEntry.js",
      library: { type: 'var', name: 'shared' },
      exposes: {
        "./EventsWatcher": "./src/EventsWatcher",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies["react"],
        },
        'react-dom': {
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
  ],
};
