var gulp = require('gulp');
var plumber = require('gulp-plumber');
var tinypng = require('gulp-tinypng-extended');

module.exports = function imageMinify() {
  return gulp.src('src/img/**/*.{gif,png,jpg,webp}')
    .pipe(plumber())
    .pipe(tinypng({
        key: 'Zb1WdJD9dPZcBSDmrCnZSfcKWkHmy7Mk'
    }))
    .pipe(gulp.dest('build/img'))
}