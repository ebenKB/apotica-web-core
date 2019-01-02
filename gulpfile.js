const gulp      = require('gulp');
const babel     = require('gulp-babel');
const connect   = require('gulp-connect');

gulp.task('js', () =>
	gulp.src('src/app.js')
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest('dist/assets/js'))
);


gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('css', function () {
    gulp.src('./assets/*.css')
      .pipe(gulp.dest('./dist/assets/css'))
      .pipe(connect.reload());
});

gulp.task('images', function () {
    gulp.src('./assets/images/*.*')
      .pipe(gulp.dest('./dist/assets/images'))
      .pipe(connect.reload());
});


gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(connect.reload());
});

gulp.task('video',function(){
  gulp.src('./assets/video/*.mp4')
  .pipe(gulp.dest('./dist/assets/video'))
  .pipe(connect.reload());
});

gulp.task('font',function(){
  gulp.src('./assets/fonts/*.*')
  .pipe(gulp.dest('./dist/assets/fonts'))
  .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch(['./src/*.html'], ['html']);
    gulp.watch(['./assets/*.css'], ['css']);
});


gulp.task('default', ['connect','css', 'video','font', 'js','images', 'html', 'watch']);