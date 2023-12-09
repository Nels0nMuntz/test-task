const gulp = require("gulp");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const postcss = require("gulp-postcss");
const postcssImport = require("postcss-import");
const nested = require("postcss-nested");
const postcssFor = require("postcss-for");
const postcssCustomProperties = require("postcss-custom-properties");
const paths = require("./paths");

module.exports = function styles() {
  return gulp
    .src(paths.src.styles)
    .pipe(sourcemaps.init())
    .pipe(
      postcss([
        postcssImport(),
        nested(),
        postcssCustomProperties(),
        postcssFor(),
        tailwindcss("./tailwind.config.js"),
        autoprefixer(),
      ]),
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.build.styles));
};
