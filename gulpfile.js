const gulp = require('gulp')
const pipeline = require('readable-stream').pipeline
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')

const js = () =>
	pipeline(
		gulp.src('src/*.js'),
		uglify(),
		rename({ suffix: '.min' }),
		gulp.dest('dist')
	)

exports.default = js
