var gulp = require('gulp');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
var uglify = require('gulp-uglify');
var cleanCss = require('gulp-clean-css');

gulp.task('build', ['js', 'css'], function () {

});

gulp.task('watch-less', function () {
  return gulp.src('less/main.less').
    pipe(watch('less/main.less')).
    pipe(plumber()).
    pipe(less()).
    pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
  return gulp.src('js/*.js').
    pipe(sourcemaps.init()).
    pipe(concat('main.js')).
    pipe(uglify()).
    pipe(sourcemaps.write()).
    pipe(gulp.dest('public/js'));
});

gulp.task('css', function () {
  return gulp.src('less/main.less').
    pipe(sourcemaps.init()).
    pipe(plumber()).
    pipe(less({
      plugins: [autoprefix]
    })).
    pipe(cleanCss()).
    pipe(sourcemaps.write()).
    pipe(gulp.dest('public/css'));
});
