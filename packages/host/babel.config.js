module.exports = {
  presets: [["react-app", { runtime: "automatic" }]],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ],
};
