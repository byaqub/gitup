const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('default', () => {
  console.log("Hooray - you created a Gulp task");
});

gulp.task('html', () => {
  console.log("imagine something useful being done to your html here");
});


gulp.task('styles', () => {
  console.log("imagine sass or postcss files here");
});


gulp.task('watch', () => {
  watch('./app/index.html', () => {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', () => {
    gulp.start('styles');
  })

});