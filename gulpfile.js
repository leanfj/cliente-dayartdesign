var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var tinify = require('gulp-tinify');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: {
            baseDir: "./",
            directory: false,
        },
        tunnel: true,
        tunnel: "leanfjdev",
        port: 8080
    });

    gulp.watch("./sass/**/*.sass", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./sass/**/*.sass")
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

gulp.task('default', ['serve']);