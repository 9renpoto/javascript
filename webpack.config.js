module.exports = {
  entry: {
    app: __dirname + '/src/index.ts',
  },
  output: {
    path: __dirname + '/dist',
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' },
    ],
    postLoaders: [
      { test: /test\.ts$/, loader: 'webpack-espower-loader' },
    ],
  },
};
