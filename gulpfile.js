var gulp = require('gulp');
var shell = require('gulp-shell');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('build-docs', shell.task('make html', {cwd: './docs'}));

gulp.task('watch-docs', ['build-docs'], function() {
	gulp.watch(['./docs/*.rst', './docs/*.py', './docs/*.bib'], ['build-docs']);
});

gulp.task('compress-js', function() {
	return gulp.src('src/scripts/**/*.js')
		.pipe(concat('main.min.js'))
		//.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('compress-css', function() {
	return gulp.src('src/styles/*.css')
		.pipe(concat('main.min.css'))
		.pipe(minifyCss({ compatibility: 'ie8' }))
		.pipe(gulp.dest('dist'));
});

gulp.task('watch-js', ['compress-js'], function() {
	gulp.watch(['src/scripts/**/*.js'], ['compress-js']);
});

gulp.task('watch-css', ['compress-css'], function() {
	gulp.watch(['src/styles/*.css'], ['compress-css']);
});

gulp.task('watch', ['watch-js', 'watch-css']);

gulp.task('default', ['build-docs', 'compress-js', 'compress-css']);
