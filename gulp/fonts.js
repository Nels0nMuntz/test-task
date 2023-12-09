const gulp = require("gulp");
const paths = require("./paths");

module.exports = function fonts() {
  return gulp.src(paths.src.fonts).pipe(gulp.dest(paths.build.fonts));
};
