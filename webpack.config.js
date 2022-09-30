module.exports = {
  entry: "./src/index.tsx",
  module: {
    loaders: [
      {
        test: require.resolve("blueimp-file-upload"),
        loader: "imports-loader?define=>false",
      },
      {
        test: require.resolve("medium-editor-insert-plugin"),
        loader: "imports-loader?define=>false",
      },
    ],
  },
};
