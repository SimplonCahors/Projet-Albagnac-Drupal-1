var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    gulpIf = require('gulp-if'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');



gulp.task('sass', function () {
  gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch(['./css/style.css', './**/*.html.twig'], function (files){
        livereload.changed(files)
    });
});