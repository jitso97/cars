const gulp = require("gulp");
const imageMin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');


// must know GULP TOP LEVEL FUNCITONS
// gulp.task - define tasks
// gulp.src - points to file to use
// gulp.dest - points to folder to output
// gulp.watch - watch fiels and folders for changes

gulp.task(
    "msg", 
    ()=>  console.log("wtf man") 
);

// copy htmls 
gulp.task("copyHTML", ()=>{
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
});
// optimize images  probably not SVGs
gulp.task('imageMin', ()=> {
    gulp.src('src/img/*')
    .pipe(imageMin())
    .pipe(gulp.dest('dist/img'));
});

// minify javascripts
gulp.task('uglify', ()=> {
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

// compile sass
gulp.task('sass', ()=> {
    gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});


gulp.task(
    'default', 
    gulp.series('copyHTML', 'sass')
);