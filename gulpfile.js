var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    fs = require('fs'),
    assign = require('lodash.assign'),
    gutil = require('gulp-util'),
    source = require('vinyl-source-stream');

// add custom browserify options here
var customOpts = {
    entries: ['./app/app.js'],
    debug: true
};
var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

// add transformations here
// i.e. b.transform(coffeeify);
gulp.task('watchify', bundle); // so you can run `gulp js` to build the file
b.on('update', bundle); // on any dep update, runs the bundler
b.on('log', gutil.log); // output build logs to terminal

function bundle() {
    return b.bundle()
        // log errors if they happen
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('build.js'))
        // optional, remove if you don't need to buffer file contents
        //.pipe(buffer())
        // optional, remove if you dont want sourcemaps
        //.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        // Add transformation tasks to the pipeline here.
        //.pipe(sourcemaps.write('./')) // writes .map file
        .pipe(gulp.dest('./app/build'));
        //.pipe(connect.reload());
}

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: false
    });
});

gulp.task('default', ['connect', 'watchify']);