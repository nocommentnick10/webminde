const gulp = require('gulp')
const plumber = require('gulp-plumber')

module.exports = function copySvg() {
    return gulp.src('src/img/**/*.svg')
    .pipe(plumber())
    .pipe(gulp.dest('build/img'))
}