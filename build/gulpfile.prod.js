const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const config = require('./gulp.config');
const configSend = require('./gulpfile.config');
const uglify = require('gulp-uglify');
//const ftp = require('gulp-ftp');
const gutil = require('gulp-util');
const babel = require('gulp-babel');


const ftp = require('gulp-sftp');



function prod () {
  gulp.task('html', function () {
    return gulp.src(config.html.src)
      .pipe(htmlmin(configSend.htmlmin))
      .pipe(gulp.dest(config.html.dist));
  });
  gulp.task('css', function () {
    return gulp.src(config.css.src)
      .pipe(autoprefixer('last 2 version'))
      .pipe(gulp.dest(config.css.dist))
      .pipe(cssnano())
      .pipe(gulp.dest(config.css.dist))
  });
  gulp.task('img', function () {
    return gulp.src(config.img.src)
      .pipe(cache(imagemin(configSend.img)))
      .pipe(gulp.dest(config.img.dist))
  });
  gulp.task('js', function () {
    return gulp.src(config.js.src)
      .pipe(gulp.dest(config.js.dist))
  });
  gulp.task('jsMin', function () {
    return gulp.src(config.jsMin.src)
      .pipe(babel())
      .pipe(uglify())
      .on('error', function (err) {
        gutil.log(gutil.colors.red('[Error]'), err.toString());
      })
      .pipe(gulp.dest(config.jsMin.dist))
  });
  gulp.task('fonts', function () {
    return gulp.src(config.fonts.src)
      .pipe(gulp.dest(config.fonts.dist))
  });
  gulp.task('other', function () {
    return gulp.src(config.other.src)
      .pipe(gulp.dest(config.other.dist))
  });

  gulp.task('build', ['html', 'css', 'img', 'js', 'fonts', 'other']);
}
module.exports = prod;
