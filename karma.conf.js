module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      '**/*.test.ts'
    ],
    preprocessors: {
      '**/*.ts': ['webpack']
    },
    plugins: [
      require('karma-typescript-preprocessor'),
      require('karma-coverage'),
      require('karma-mocha'),
      require('karma-firefox-launcher'),
      require('karma-webpack')
    ],
    webpackMiddleware: {
      noInfo: true,
      quiet: true,
      stats: {
        colors: true
      }
    },
    coverageReporter: {
      reporters: [
        {type: 'html'},
        {type: 'cobertura'}
      ]
    },
    reporters: ['progress', 'coverage'],
    browsers: ['Firefox']
  })
}
