import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import eslint from 'gulp-eslint';
import exorcist from 'exorcist';
import browserSync from 'browser-sync';
import watchify from 'watchify';
import babelify from 'babelify';
import uglify from 'gulp-uglify';
import ifElse from 'gulp-if-else';
import gp_concat from 'gulp-concat';
import gp_minifycss from 'gulp-minify-css';
import del from 'del';
import sass from 'gulp-sass'

watchify.args.debug = true;

const sync = browserSync.create();

// Input file.
watchify.args.debug = true;
var bundler = browserify('src/app.js', watchify.args);

// Babel transform
bundler.transform(babelify.configure({
  sourceMapRelative: 'src'
}));

// On updates recompile
bundler.on('update', bundle);

function bundle() {
  return bundler.bundle()
    .on('error', function(error){
      console.error( '\nError: ', error.message, '\n');
      this.emit('end');
    })
    .pipe(exorcist('public/assets/js/bundle.js.map'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(ifElse(process.env.NODE_ENV === 'production', uglify))
    .pipe(gulp.dest('public/assets/js'));
}

gulp.task('default', ['transpile']);

gulp.task('transpile', ['lint', 'clean', 'core_css', 'app_css', 'fonts'], () => bundle());

gulp.task('lint', () => {
    return gulp.src(['src/**/*.js', 'gulpfile.babel.js'])
      .pipe(eslint())
      .pipe(eslint.format())
});

gulp.task('clean', () => {
  del ['public/assets/*' ]
});

gulp.task('core_css', () => {
  gulp.src(['public/bower_components/font-awesome/css/font-awesome.min.css',
            'public/react-notifications/notifications.css'])
      .pipe(gp_concat('core.css'))
      .pipe(gp_minifycss())
      .pipe(gulp.dest('public/assets/'));
});

gulp.task('app_css', () => {
  gulp.src(['public/styles/main.scss'])
  .pipe(gp_concat('app.scss'))
  .pipe(sass())
  .pipe(gp_minifycss())
  .pipe(gulp.dest('public/assets/'));
});

gulp.task('fonts', () => {
  gulp.src(['public/fonts/*',
            'public/fonts/**/*'])
  .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('serve', ['transpile'], () => sync.init({
  server: 'public',
  port: process.env.PORT || 8888,
  host: process.env.IP || 'localhost'
}));

gulp.task('js-watch', ['transpile'], () => sync.reload());

gulp.task('watch', ['serve'], () => {
  gulp.watch('src/**/*', ['js-watch'])
  gulp.watch('public/styles/*', ['js-watch'])
  gulp.watch('public/assets/style.css', sync.reload)
  gulp.watch('public/index.html', sync.reload)
});
