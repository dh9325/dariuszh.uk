var gulp = require('gulp');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var LessAutoprefix = require('less-plugin-autoprefix');
var autoprefix = new LessAutoprefix({browsers: ['last 2 versions']});
var livereload = require('livereload');

gulp.task('build', function () {

});

gulp.task('watch-less', function () {
    return gulp.src('less/main.less')
        .pipe(watch('less/main.less'))
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

gulp.task('reload-less', ['watch-less', 'reload'], function () {

});

gulp.task('reload', function () {
    livereload.createServer().watch(__dirname + "/public");
});
