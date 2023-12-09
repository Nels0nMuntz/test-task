const gulp = require("gulp");
const fileInclude = require("gulp-file-include");
const sourcemaps = require("gulp-sourcemaps");
const paths = require("./paths");

module.exports = function js() {
  return gulp
    .src(paths.src.js)
    .pipe(sourcemaps.init())
    .pipe(fileInclude())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build.js));
};
