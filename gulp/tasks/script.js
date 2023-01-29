const gulp = require('gulp')
const plumber = require('gulp-plumber')
const eslint = require('gulp-eslint')
const terser = require('gulp-terser')
const rename = require("gulp-rename")
const sourcemaps = require('gulp-sourcemaps')

module.exports = function script() {
    return gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(sourcemaps.init())
      .pipe(terser())
      .pipe(sourcemaps.write())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('build/js'))
}