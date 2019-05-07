var gulp = require('gulp')
var livereload = require('gulp-livereload')
var sass = require('gulp-sass')

sass.compiler = require('node-sass')

var autoprefix = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp
    .src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix('last 2 versions'))
    .pipe(gulp.dest('./public/css'))
})

gulp.task('default', ['sass'], function () {
  gulp.watch('assets/scss/**/*.scss', ['sass'])
})
