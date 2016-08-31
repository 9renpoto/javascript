module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      'src/*.ts',
      'test/*test.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'test/*test.ts': ['webpack']
    },
    webpack: require('./webpack.config.js'),
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: {
        colors: true
      }
    },
    reporters: ['progress'],
    browsers: ['Firefox'],
    concurrency: Infinity
  })
}
