const gulp = require("gulp"),
  less = require("gulp-less"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer"),
  concat = require("gulp-concat");

gulp.task("browser-sync", function() {
  browserSync({
    server: {
      baseDir: "app"
    },
    notify: false
  });
});

gulp.task("styles", function() {
  return gulp
    .src(`./app/styles/*.less`)
    .pipe(less())
    .pipe(concat("styles.min.css"))
    .pipe(autoprefixer(["last 15 versions"]))
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync.stream());
});
gulp.task("watch", ["styles"], function() {
  gulp.watch(`./app/styles/*.less`, ["styles"]);
  gulp.watch("app/*.html", browserSync.reload);
});

gulp.task("default", ["watch"]);
