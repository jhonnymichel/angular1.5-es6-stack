module.exports = {
  entry: {
    js: "./app/js/entry.js"
  },
  output: {
    path: __dirname + '/app/dist/js',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: "node_modules",
        loader: "babel",
        query: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.html$/,
        loader: "html"
      }
    ]
  }

}
