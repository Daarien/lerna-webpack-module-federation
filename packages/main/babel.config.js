module.exports = {
  presets: [["react-app", { runtime: "automatic" }]],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "module-resolver",
      {
          "root": [
              "./src"
          ],
          "alias": {
              "pages": "./src/pages/",
              "store": "./src/store/",
              "utils": "./src/utils/",
              "componets": "./src/pages/",
          },
          "extensions": [
              ".js",
              ".jsx",
              ".ts",
              ".tsx",
          ]
      }
  ]
  ],
};
