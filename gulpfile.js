var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var tinify = require('gulp-tinify');
var wait = require('gulp-wait');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'concatjs'], function () {

    browserSync.init({
        server: {
            baseDir: "./dist",
            directory: false,
        }

    });

    gulp.watch("./dev/sass/**/*.sass", ['sass']);
    gulp.watch("./dev/js/*.js", ['concatjs']);
    gulp.watch("./dist/*.html").on('change', browserSync.reload);
    gulp.watch("./dev/js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./dev/sass/**/*.sass")
        .pipe(wait(50))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
});

//minificar imagens
gulp.task('tinify', function () {
    gulp.src('./dev/mini-img/**/*')
        .pipe(tinify('b_wi1hUvhf7dZxFcK0vZT3AUTckgfbTi'))
        .pipe(gulp.dest('./dist/img'));
});

//Concatenar Javascript
var jquery = './node_modules/jquery/dist/jquery.js';
var slick = './node_modules/slick-carousel/slick/slick.js';
var mainJS = './dev/js/main.js'

gulp.task('concatjs', function () {
    return gulp.src([jquery, slick, mainJS])
        .pipe(concat('./scripts.js'))
        .pipe(gulp.dest('./dev/js/'))
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('uglify', function (){
        gulp.src('./dist/js/scripts.min.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['serve']);