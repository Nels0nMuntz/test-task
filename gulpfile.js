const gulp = require("gulp");

const html = require("./gulp/html");
const styles = require("./gulp/styles");
const imagesSvg = require("./gulp/imagesSvg");
const serve = require("./gulp/serve");
const clean = require("./gulp/clean");

const tasks = gulp.parallel(html, styles, imagesSvg);

const build = gulp.series(clean, tasks);

module.exports.start = gulp.series(build, serve);
module.exports.build = gulp.series(build);
