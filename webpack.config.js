module.exports = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: require.resolve("blueimp-file-upload"),
        loader: "imports?define=>false",
      },
      {
        test: require.resolve("medium-editor-insert-plugin"),
        loader: "imports?define=>false",
      },
    ],
  },
};
