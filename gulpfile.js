var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build-docs', shell.task('make html', {cwd: './docs'}));

gulp.task('watch-docs', ['build-docs'], function() {
	gulp.watch(['./docs/*.rst', './docs/*.py', './docs/*.bib'], ['build-docs']);
});

gulp.task('default', ['build-docs']);
