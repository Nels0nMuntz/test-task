const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const paths = require("./paths");

module.exports = function html() {
  return gulp.src(paths.src.html).pipe(fileInclude()).pipe(gulp.dest(paths.build.html));
};
