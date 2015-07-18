var gulp = require('gulp');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('build-docs', shell.task('make html', {cwd: './docs'}));

gulp.task('watch-docs', ['build-docs'], function() {
	gulp.watch(['./docs/*.rst', './docs/*.py', './docs/*.bib'], ['build-docs']);
});

gulp.task('compress-js', function() {
	return gulp.src('src/scripts/*.js')
		.pipe(uglify())
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch-js', ['compress-js'], function() {
	gulp.watch(['src/scripts/*.js'], ['compress-js']);
});

gulp.task('default', ['build-docs', 'compress-js']);
