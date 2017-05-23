const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('browserSync', () => {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

gulp.task('sass', () => {
    return gulp.src('app/scss/**/*.scss') //source
        .pipe(sass()) //what we do with the file
        .pipe(gulp.dest('app/css')) //destination
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('watch', ['browserSync', 'sass'], () => {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    //Other Watchers
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});