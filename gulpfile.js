'use strict'

const connect = require('gulp-connect')
const gulp = require('gulp')
const oghliner = require('oghliner')

gulp.task('default', ['build', 'offline'])

gulp.task('build', function (callback) {
  return gulp.src('app/**').pipe(gulp.dest('dist'))
})

gulp.task('configure', oghliner.configure)

gulp.task('deploy', function () {
  return oghliner.deploy({
    rootDir: 'dist'
  })
})

gulp.task('offline', ['build'], function () {
  return oghliner.offline({
    rootDir: 'dist/',
    fileGlobs: [
      'images/**',
      'index.html',
      'scripts/**',
      'styles/**'
    ]
  })
})

gulp.task('serve', function () {
  connect.server({
    root: 'dist'
  })
})
