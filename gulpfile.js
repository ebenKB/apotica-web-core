const gulp      = require('gulp');
var postcss      = require('gulp-postcss');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const { series, parallel } = require('gulp');
// const uglify = require ('gulp-uglify');

// const gulp      = require('gulp');
// var postcss      = require('gulp-postcss');
// var sourcemaps   = require('gulp-sourcemaps');
// var autoprefixer = require('autoprefixer');

// gulp.task('autoprefixer', function () {
//   return gulp.src('./themes/apotica-theme/source/_css/**/*.css')
//   .pipe(sourcemaps.init())
//   .pipe(postcss([ autoprefixer() ]))
//   .pipe(sourcemaps.write('.'))
//   .pipe(gulp.dest('./themes/apotica-theme/source/css'));
// });

// gulp.task('js', function() {
//   return gulp.src('./themes/apotica-theme/source/_css/**/*.css')
// })

// gulp.task('watch', function () {
//     gulp.watch(['./themes/apotica-theme/source/_css/**/*.css'], ['css']);
// });

function clean(cb){
  cb();
}

function cssMinify(cb) {
  cb();
}

function autoprefix(cb) {
  gulp.src('./themes/apotica-theme/source/_css/**/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([ autoprefixer() ]))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./themes/apotica-theme/source/css'));
  cb();
}

gulp.watch('./themes/apotica-theme/source/_css/**/*.css', autoprefix, function(cb) {
  cb();
})

exports.build = series(clean, parallel(autoprefix, cssMinify));