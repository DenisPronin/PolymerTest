var gulp = require('gulp');
var connect = require('gulp-connect');
var  open = require ('gulp-open');

var sources = {
    js: {
        dev: ['./app/**/*.js']
    },
    css: {
        dev: ['**/**/*.css']
    },
    templates: ['**/**/*.html']
};
var isWin = /^win/.test(process.platform);

gulp.task('connect', function(){
    connect.server({
        root: [__dirname],
        port: 5301,
        livereload: true
    });
});

gulp.task('css', function() {
    gulp.src(sources.css.dev)
        .pipe(connect.reload());
});

gulp.task('scripts', function() {
    gulp.src(sources.js.dev)
        .pipe(connect.reload());
});


gulp.task('html', function () {
    gulp.src(sources.templates)
        .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch(sources.css.dev, ['css']);
    gulp.watch(sources.js.dev, ['scripts']);
    gulp.watch(sources.templates, ['html']);
});

gulp.task('default', ['connect', 'watch']);
