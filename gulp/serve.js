const gulp = require("gulp");
const server = require("browser-sync").create();

const html = require("./html");
const styles = require("./styles");
const imagesSvg = require("./imagesSvg");
const paths = require("./paths");

function reload(callback) {
  server.reload();
  callback();
}

module.exports = function serve(callback) {
  server.init({
    server: {
      baseDir: "./build/",
    },
    notify: false,
  });
  gulp.watch(paths.watch.html, gulp.series(gulp.parallel(html, styles), reload));
  gulp.watch(paths.watch.styles, gulp.series(styles, reload));
  gulp.watch(paths.watch.images.svg, gulp.series(imagesSvg, reload));
  return callback();
};
