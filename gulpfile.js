var gulp = require('gulp');
var args = require('yargs').argv;
var bump = require('gulp-bump');
var less = require('gulp-less');

gulp.task('less', function () {
    return gulp.src('src/*.less')
        .pipe(less())
        .pipe(gulp.dest('src'));
});

gulp.task('bump', function () {
    return gulp.src('*.json')
        .pipe(bump({type: args.type}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function () {
    gulp.start('less');
});
