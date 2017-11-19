const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimports = require('postcss-import');

gulp.task('styles', () => {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssimports, nested, cssvars, autoprefixer]))
    .on('error', function(info) {
      console.log(info.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
});