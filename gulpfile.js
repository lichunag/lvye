var gulp = require('gulp');


var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var autoprefix = require('gulp-autoprefixer');
var concat = require('gulp-concat'); 

gulp.task('less',function(){
	gulp.src(['绿野/css/*.less'])
	  .pipe(less())
	  .pipe(autoprefix({
	  	browsers:['last 20 versions'],
	  	cascade:true
	  }))
	  .pipe(cleanCss())
	  .pipe(concat('index1.min.css'))
	  .pipe(gulp.dest('绿野/css/')) 
})


var connect = require('gulp-connect');
gulp.task('localhost',function(){
	connect.server({
		root:'绿野/',
		port:8081
	})
})

gulp.task('mywatch',function(){
	gulp.watch('绿野/css/*.less',['less']);
	
});

gulp.task('default',['mywatch','localhost','less']);

                                             



