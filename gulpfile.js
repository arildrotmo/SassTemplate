'use strict';

var gulp = require('gulp');

// Load plugins
var $ = require('gulp-load-plugins')();

// Styles
gulp.task('styles', function () {
    return gulp.src('styles.scss')
        .pipe($.rubySass({
          style: 'expanded'
        }))
        .pipe($.autoprefixer('last 1 version'))
        // .pipe($.uncss({
        //     html: ['index.html']
        // }))
        .pipe(gulp.dest('_css'));
});


// Default task
gulp.task('default', function () {
    gulp.start('styles');
});

// Watch
gulp.task('watch', function () {
    // Watch .scss files
    gulp.watch('**/*.scss', ['styles']);
});
