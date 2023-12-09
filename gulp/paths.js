const roots = {
  src: "src/",
  build: "build/",
};

module.exports = {
  src: {
    root: roots.src,
    html: roots.src + "*.html",
    styles: roots.src + "styles/pages/*.css",
    js: roots.src + "js/pages/*.js",
    fonts: roots.src + "fonts/**/*.{eot,woff2,woff,ttf,svg}",
    images: {
      svg: roots.src + "images/**/*.svg",
    },
  },
  build: {
    root: roots.build,
    html: roots.build,
    styles: roots.build + "css",
    js: roots.build + "js",
    fonts: roots.build + "fonts",
    images: roots.build + "images",
  },
  watch: {
    html: [roots.src + "*.html", roots.src + "html/**/*.html"],
    styles: roots.src + "styles/**/*.css",
    js: roots.src + "js/**/*.js",
    fonts: roots.src + "fonts/**/*.{eot,woff2,woff,ttf,svg}",
    images: {
      svg: roots.src + "images/**/*.svg",
    },
  },
};
