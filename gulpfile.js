var gulp = require('gulp');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();	    // 用来打开一个浏览器
var watch = require('gulp-watch');


gulp.task('html', [], function () {
	return gulp.src('./src/*.html')
		.pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
	return gulp.src('./src/*.js')
		.pipe(babel({                   // 编译es6语法
			presets: ["@babel/env"],
			plugins: []
		}))
		.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
	w(html, 'html');
	w(js, 'js');
	function w (path, task) {
		watch(path, function () {
			runSequence(task, 'browser_reload'); // 打包完成后，再刷新浏览器。监听任务不要带cb参数，否则会报错：回调次数太多
		});
	}
});


// 启本地服务，并打开浏览器
gulp.task('browser', function () {
	browserSync.init({
		server: './'
	});
});

gulp.task('default', ['html',  'browser']);