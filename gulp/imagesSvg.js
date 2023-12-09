const gulp = require("gulp");
const svgmin = require("gulp-svgmin");
const paths = require("./paths");

module.exports = function images() {
  return gulp.src(paths.src.images.svg).pipe(svgmin()).pipe(gulp.dest(paths.build.images));
};
