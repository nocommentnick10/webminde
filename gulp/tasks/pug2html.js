const { dest } = require('gulp')
const gulp = require('gulp')
const plumber = require('gulp-plumber')
const pug = require('gulp-pug')

module.exports = function pug2html(cb) { 
    return gulp.src('src/pages/*.pug')  // ищем файлы по указанному пути
        .pipe(plumber())    // обработка ошибок
        .pipe(pug())    // компилируем
        .pipe(gulp.dest('build'))   //результат выгружаем в папку build
}