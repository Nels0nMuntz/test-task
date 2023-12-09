const del = require("del");
const paths = require("./paths");

module.exports = async function clean(callback) {
  await del(paths.build.root);
  return callback();
};
