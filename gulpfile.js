'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    opn = require('opn'),
    connect = require('gulp-connect'),
    autoprefixer = require('autoprefixer-core'),
    ampify = require('ampify');

var processors = [
    autoprefixer({browsers: 'last 2 versions'})
];

/* SCSS */

gulp.task('sass', function () {
    gulp.src([
        'source/**/*.scss'
    ], { base: '.' })
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./export/'))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./export/'));
});

/* Javascript */

gulp.task('libs', function () {
    gulp.src([
        //'node_modules/jquery-countdown/dist/jquery.countdown.min.js'
    ], { base: '.' })
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./export/'));
});

gulp.task('scripts', function () {
    gulp.src([
            'source/**/*.js'
        ], { base: '.' })
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./export/'));
});

/* Watcher */

gulp.task('watch', function () {
    gulp.watch(['source/**/*.scss'], ['sass']);
    gulp.watch(['source/**/*.js'], ['scripts']);
});

/* Connect */

gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

/* Ampify */

gulp.task('ampify', function () {
    gulp.src([
            './export/index.html'
        ], { base: '.' })
        .pipe(ampify('index.html'))
        .pipe(gulp.dest('./export/amp/'));
});

gulp.task('open', ['connect'], function () {
    opn('http://localhost:63342/bmtp-landing/export/index.html', {app: 'google chrome'});
});

/* Default */

gulp.task('default', ['sass','libs', 'scripts']);