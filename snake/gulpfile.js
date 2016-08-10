// 声明变量
var htmlmin = require('gulp-htmlmin');

// 压缩html文件
gulp.task('htmlys',function(){
	gulp.src('snake.html')
		.pipe(htmlmin())
		.pipe(gulp.dest('dist/html'));
});