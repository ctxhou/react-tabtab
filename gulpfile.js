var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('scss', function() {
    gulp.src(["scss/*.scss"])
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers:  AUTOPREFIXER_BROWSERS,
        cascade: false
      }))
      .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch(['scss/*.scss'], ['scss']);
});

gulp.task('browser-sync', function() {

    browserSync.init(['public/stylesheets/*.css'], {
        proxy: "localhost:5000",
        port: 3002
    });

    // gulp.watch(files, reload);
});

gulp.task('default', ['watch', 'browser-sync', 'scss']);
