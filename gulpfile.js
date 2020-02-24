const del = require('del');
const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const replace = require('gulp-replace');

const paths = {
  images: {
    src: 'src/images/*',
    dest: 'dist/i/'
  },
  styles: {
    src: ['src/style.css', 'src/modules/*.css'],
    dest: 'dist/',
    name: 'style.css'
  }
}

function clean() {
  return del(['dist/*'])
}

function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(replace('url(images/', 'url(i/'))
    .pipe(concat(paths.styles.name))
    .pipe(cleancss())
    .pipe(gulp.dest(paths.styles.dest));
}

const build = gulp.series(clean, gulp.parallel(images, styles));

module.exports = {
  clean, images, styles, build
};
