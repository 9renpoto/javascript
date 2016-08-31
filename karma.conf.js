const webpackConfig = require('./webpack.config')

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
      'test/*test.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    webpackMiddleware: {
      // noInfo: true,
      // quiet: true,
      stats: {
        colors: true
      }
    },
    reporters: ['progress'],
    browsers: ['Firefox'],
    concurrency: Infinity
  })
}
