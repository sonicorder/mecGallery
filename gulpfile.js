const gulp = require('gulp');  
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 
    
//script paths
var jsFiles = 'assets/scripts/**/*.js',  
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(rename('scripts.min.js'))
        .pipe(babel({
            presets: ['es2015']
        }))        
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

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
    gulp.watch(jsFiles, ['scripts']);
});
