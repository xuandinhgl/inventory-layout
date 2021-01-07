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

const assets = 'src/styles'
const outputAssets = 'dist/css'

const fs = require('fs')

fs.readdirSync(assets).reduce((acc, file) => {
  if (!fs.lstatSync(assets + '/' +file).isDirectory()) {
    const route = `${assets}/${file}`
    const nameWithoutType = file.substr(0, file.lastIndexOf('.scss'))
    const output = `${outputAssets}/${nameWithoutType}.min.css`
    return acc.sass(route, output)
  }
}, mix)

mix.options({
  processCssUrls: false
})
  .copyDirectory('src/images', 'dist/images')
  .js('src/js/main.js', 'dist/main.min.js')
  .copy('src/html', 'dist');