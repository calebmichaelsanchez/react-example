var gulp = require('gulp');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');


gulp.task('start', function () {
	nodemon({
		script: './app/server.js',
		ext: 'js html',
		env: {'NODE_ENV': 'development'}
	})
});

gulp.task('webpack', function () {
	var myConfig = Object.create(webpackConfig);
	webpack(myConfig, function(error, stats){
		if(error) throw new gutil.PluginError('webpack', error);
		gutil.log("[webpack]", stats.toString({

		}));
	});
})