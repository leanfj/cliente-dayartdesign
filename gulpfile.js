var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var tinify = require('gulp-tinify');
var wait = require('gulp-wait');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: {
            baseDir: "./",
            directory: false,
        }

    });

    gulp.watch("./sass/**/*.sass", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./sass/**/*.sass")
        .pipe(wait(50))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

//minificar imagens
gulp.task('tinify', function () {
    gulp.src('./mini-img/**/*')
        .pipe(tinify('b_wi1hUvhf7dZxFcK0vZT3AUTckgfbTi'))
        .pipe(gulp.dest('./img'));
});

//Concatenar Javascript
var jquery = './node_modules/jquery/dist/jquery.js';
var slick = './node_modules/slick-carousel/slick/slick.js';
var mainJS = './js/main.js'

gulp.task('concatjs', function () {
    return gulp.src([jquery, slick, mainJS])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./js/'))
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('./js/'));
});


gulp.task('default', ['serve']);