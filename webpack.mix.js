let mix = require('laravel-mix');
mix.setPublicPath('dist');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.browserSync({
  proxy: false,
  watch: false,
  open: false,
  codeSync: true,
  server: {
    baseDir: "dist",
    index: "index.html",

  }
});
mix.options({
  processCssUrls: false
}).sass('src/styles/index.scss', 'dist/css/index.min.css')
  .copyDirectory('src/images', 'dist/images')
  .js('src/js/main.js', 'dist/main.min.js')
  .copy('src/html', 'dist');