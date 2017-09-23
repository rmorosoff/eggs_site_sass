'use strict';

var gulp = require('gulp');
var cssvalidate = require('gulp-w3c-css');
var path = require('path');
var gutil = require('gulp-util');
var htmlhint = require('gulp-htmlhint');

// variables to hold some of the paths needed for gulp tasks
var srcPath = path.join(__dirname, './assets/stylesheets/*.css');
var dstPath = path.join(__dirname, '././assets/csserror');
var htmlPath = path.join(__dirname, './htmlvalidate/');

gulp.task('htmlhint', function() {
    gulp.src("./*.html")
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
});

gulp.task('cssvalidate', function() {
    gulp.src(srcPath)
    .pipe(cssvalidate())
    .pipe(gulp.dest(dstPath));
});

gulp.task('default', ['htmlhint', 'cssvalidate']);