const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('./scss/blocks/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('copyImage', function () {
  return gulp.src('./img/**/*')
    .pipe(gulp.dest('./dist/img'))
})