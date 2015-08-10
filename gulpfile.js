var gulp = require('gulp');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var replace = require('gulp-replace'); 
var merge = require('merge2');
var fs = require('fs');

var tsProjectJs = ts.createProject('tsconfig.json', { sortOutput: true });
//if use same project exception thrown on task
var tsProjectDts = ts.createProject('tsconfig.json', { sortOutput: true });

var REF_REGEXP = /^\/\/\/\s*<reference\s+path=['"].*['"]\s*\/>\s*$/gm;
var IMPORT_REGEXP = /^import\s+.*\;$/gm;  
var EXPORT_DECLARE_REGEXP = /^export\s+declare\s+/gm;

gulp.task('build', function() {

    //build conactinated version of source
    //no module and node exports
    
    var tsResultJs =  tsProjectJs.src()
        .pipe(ts(tsProjectJs));

    var tsResultDts =  gulp.src("src/trader-net.ts")
        .pipe(ts(tsProjectDts));

    return merge([
        tsResultJs.js
        .pipe(replace(REF_REGEXP, ''))
        .pipe(gulp.dest('dist')),           
        tsResultDts.dts
        .pipe(replace(REF_REGEXP, ''))
        .pipe(replace(IMPORT_REGEXP, ''))
        .pipe(concat('trader-net.d.ts'))
        .pipe(gulp.dest('tmp'))
    ]);        
});

gulp.task('build:module', ['build'], function() {
    //build module version from `conactinated` version
    var build = fs.readFileSync("tmp/trader-net.d.ts", "utf-8");
    gulp.src("src/index.tmpl.d.ts")
    .pipe(replace('//', build))
    .pipe(replace(EXPORT_DECLARE_REGEXP, 'export '))
    .pipe(concat('index.d.ts'))
    .pipe(gulp.dest('dist'));
    
})