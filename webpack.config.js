const path = require('path')
module.exports = {
  entry: {
    'app': path.join(__dirname, '/src/calculator.ts')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.ts', '.tsx']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
}
