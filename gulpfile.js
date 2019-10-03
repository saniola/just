const gulp= require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

sass.compiler = require('node-sass');

function html(done) {
  gulp.src('client/*.html')
  .pipe(gulp.dest('build/'));

  done();
}

function css(done) {
  gulp.src('client/scss/**/*.scss', { sourcemaps: true })
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('css/bundle.min.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/'), { sourcemaps: true })
    .pipe(browserSync.stream());

  done();
}

function js() {
  return gulp.src('client/js/**/*.js', { sourcemaps: true })
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js', { sourcemaps: true }))
}

function watch() {
  gulp.watch('client/scss/**/*.scss', css);
  gulp.watch('client/*.html', html).on('change', browserSync.reload);
  gulp.watch('client/js/**/*.js', js).on('change', browserSync.reload);
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: './build/'
    },
    port: 3000,
  });

  done();
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.watch = watch;
exports.sync = sync;
exports.default = gulp.parallel(sync, watch);
