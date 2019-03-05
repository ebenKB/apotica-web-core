const gulp      = require('gulp');
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('autoprefixer', function () {
  return gulp.src('./themes/apotica-theme/source/_css/**/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./themes/apotica-theme/source/css'));
});

gulp.task('watch', function () {
    gulp.watch(['./themes/apotica-theme/source/_css/**/*.css'], ['css']);
});

gulp.task( ['autoprefixer', 'watch']);
