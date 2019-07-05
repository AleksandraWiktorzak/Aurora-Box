var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var juck = require('gulp-nunjucks-render');
var wait = require('gulp-wait');
var min = require('gulp-imagemin');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('js', function () {
  gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./web/js'))
});
gulp.task('img', function () {
  gulp.src('./src/images/**/*')
    .pipe(min())
    .pipe(gulp.dest('./web/images'))
});

gulp.task('juck', function () {
  return gulp.src(['./src/templates/*.html'])
    .pipe(juck({
      path: ['./src/templates']
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      caseSensitive: true
    }))
    .pipe(gulp.dest('./web'))
});

gulp.task('reload', function () {
  browserSync.reload()
});

gulp.task('serve', function () {
  browserSync.init({
    server: './web'
  });
  gulp.watch('./src/js/main.js', ['js']);
  gulp.watch('./src/templates/index.html', ['reload']);
  gulp.watch('./src/scss/*.scss', ['sass']);
  gulp.watch('./src/templates/components/*.html', ['juck']);
  gulp.watch('./src/templates/components/*.html', ['reload'])

})
gulp.task('sass', function () {
  return gulp.src('./src/scss/style.scss')
    .pipe(wait(500))
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false,
      grid: "autoplace"
  }))
    .pipe(gulp.dest('./web/css'))
    .pipe(browserSync.stream());
});
gulp.task('build', ['serve', 'reload', 'sass', 'juck', 'img', 'js']);
gulp.task('default', ['build'])