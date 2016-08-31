const path = require('path')
module.exports = {
  entry: {
    'app': path.join(__dirname, '/src/calculator.ts')
  },
  output: {
    sourceMapFilename: '[name].bundle.map',
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ],
    postLoaders: [
      { test: /test\.ts$/, loader: 'webpack-espower-loader' }
    ]
  }
}
