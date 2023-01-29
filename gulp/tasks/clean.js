const gulp = require('gulp')
const del = require('gulp-clean')

module.exports = function clean() {
  return gulp.src('build/')
    .pipe(del());
}