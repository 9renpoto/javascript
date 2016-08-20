module.exports = function(config) {
  config.set({
    basePath: '',
    files: [
      '**/*.ts'
    ],
    preprocessors: {
      '**/*.test.ts': ['webpack']
    },
    plugins: [
      require('karma-coverage'),
      require('karma-mocha'),
      require('karma-firefox-launcher'),
      require('karma-webpack')
    ],
    webpack: {
      module: { loaders: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]}
    },
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
