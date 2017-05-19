var gulp = require("gulp");



//監視
gulp.task("default", function() {
    gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("sass/**/*.scss",["sass"]);
    gulp.watch("./src/**/*.jade",["jade"]);
});

//sass_reload
var sass = require("gulp-sass");

gulp.task("default", function() {
    gulp.src("sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./css"));
});


//auto
var autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function() {
    gulp.src("sass/**/*scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./css"));
});


//jade
var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('default', () => {
    return gulp.src(['./src/**/*.jade', '!./src/**/_*.jade'])
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dest/'));
});


// //ブラウザリロード
// var browser = require("browser-sync");
//
// gulp.task("server", function() {
//     browser({
//         server: {
//             baseDir: "./dist"
//         }
//     });
// });
// gulp.task("js", function() {
//     gulp.src(["js/**/*.js","!js/min/**/*.js"])
//         .pipe(uglify())
//         .pipe(gulp.dest("./js/min"))
//         .pipe(browser.reload({stream:true}))
// });
//
// gulp.task("sass", function() {
//     gulp.src("sass/**/*scss")
//         .pipe(frontnote())
//         .pipe(sass())
//         .pipe(autoprefixer())
//         .pipe(gulp.dest("./css"))
//         .pipe(browser.reload({stream:true}))
// });
//
// gulp.task("default",['server'], function() {
//     gulp.watch(["js/**/*.js","!js/min/**/*.js"],["js"]);
//     gulp.watch("sass/**/*.scss",["sass"]);
// });
