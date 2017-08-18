'use strict';

var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    minifyCss   = require('gulp-minify-css'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    postcss     = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    ampify      = require('ampify'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

var processors = [
    autoprefixer({browsers: 'last 2 versions'})
];

/* SCSS */

gulp.task('sass', function () {
    gulp.src([
        'source/**/*.scss'
    ], { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            sourceMap: true
        }).on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(concat('style.css'))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./export/'))
        .pipe(reload({stream: true}));
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
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./export/'));
});

/* Watcher */

gulp.task('watch', function () {
    gulp.watch(['source/**/*.scss'], ['sass']);
    gulp.watch(['source/**/*.js'], ['scripts']);
});

/* Ampify */

gulp.task('ampify', function () {
    gulp.src([
        './export/index.html'
    ], { base: '.' })
        .pipe(ampify('index.html'))
        .pipe(gulp.dest('./export/amp/'));
});


/* browserSync*/

var config = {
    server: {
        baseDir: "./export"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000
};

gulp.task('webserver', function () {
    browserSync(config);
});

/* Default */

gulp.task('default', ['sass','libs', 'scripts', 'webserver', 'watch']);