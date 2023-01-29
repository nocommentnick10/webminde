const gulp = require('gulp')

const serve = require('./gulp/tasks/serve')
const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const script = require('./gulp/tasks/script')
const imageMinify = require('./gulp/tasks/imageMinify')
const clean = require('./gulp/tasks/clean')
const svg = require('./gulp/tasks/copySvg')
const copySvg = require('./gulp/tasks/copySvg.js')

function setMode(isProduction = false) {
    return cb => {
      process.env.NODE_ENV = isProduction ? 'production' : 'development'
      cb()
    }
}

const dev = gulp.parallel(pug2html, styles, script, imageMinify, copySvg)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, serve)
module.exports.build = gulp.series(setMode(true), build)