module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current", // For Jest tests running in a Node environment
        },
      },
    ],
  ],
};
