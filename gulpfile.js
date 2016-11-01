'ust strict';

var gulp = require('gulp');
var ts = require('gulp-typescript');
var srcMaps = require('gulp-sourcemaps');

var tsPattern = 'app/**/*.ts';
var tsRootDir = './app';
var jsOutDir = './dist';

var options = {
	target: 'ES5',
	module: 'commonjs',
	rootDir: tsRootDir,
	outDir: jsOutDir,
	moduleResolution : 'node'
}

gulp.task('compileTypeScript', () => {
	gulp.src(tsPattern)
		.pipe(srcMaps.init())
		.pipe(ts(options))
		.pipe(srcMaps.write('../dist'))
		.pipe(gulp.dest(jsOutDir));
});

gulp.task('watchTsFiles', () => {
	gulp.watch(tsPattern, ['compileTypeScript']);
});