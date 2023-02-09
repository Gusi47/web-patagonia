const { src, dest, watch, series } = require('gulp');

// css y sass
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// imagenes

const imagemin = require('gulp-imagemin')

function css( done ) {
    src('src/scss/app.scss')                                   //iddentificar archivo
      .pipe( sass()) 
      .pipe( postcss([ autoprefixer(), cssnano() ]))                   // compilar ese archivo
      .pipe( dest('build/css'))                               // guardar ese archivo compilado

   done();
}

function imagenes( done ) {
    src('src/img/**/*')
     .pipe( imagemin({ optimizationlevel: 3})) // solo agregar esto para imagemin
     .pipe( dest( 'build/img' ) );

     done();
}

function dev() {
    watch( 'src/scss/**/*.scss', css );
    watch( 'src/img/**/*', imagenes )
}


exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series( imagenes, css, dev);


// Tareas por deafult
// Series: se inicia la tarea, y cuando finaliza, inicia la siquiente
// Parallel: todas las tareas inician al mismo tiempo 