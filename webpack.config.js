const path = require('path')
module.exports = {
  entry: {
    app: path.join(__dirname, '/src/index.ts')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: { loaders: [
    { test: /\.ts$/, loader: 'awesome-typescript-loader' }
  ]}
}
