const gulp = require('gulp');  
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');

//style paths
const sassFiles = 'styles/sass/*.scss',  
      cssDest = 'styles/css/';

gulp.task('styles', function(){  
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest))
		.pipe(uglifycss({
			"maxLineLen": 80,
			"uglyComments": true
    	}))
		.pipe(gulp.dest(cssDest));
});

//WATCH FOR CHANGES
gulp.task('watch',function() {  
    gulp.watch(sassFiles,['styles']);
});
