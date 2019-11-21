const Encore = require('@symfony/webpack-encore');
const webpackEntry2LibPlugin = require('webpack-entry2lib-plugin');
const IconfontPlugin = require('iconfont-plugin-webpack');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('build/')
    // public path used by the web server to access the output path
    .setPublicPath('/themes/custom/embark/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('global', './assets/js/base.js')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()
    // .disableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabel(() => {}, {
        useBuiltIns: 'usage',
        corejs: 3
    })

    // enables Sass/SCSS support
    .enableSassLoader()
    .enablePostCssLoader()

    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]'
        // to: 'images/[path][name].[hash:8].[ext]'
    })

    // uncomment if you're having problems with a jQuery plugin
    .autoProvidejQuery()

    // Copy entrypoints to Drupal library
    .addPlugin(new webpackEntry2LibPlugin())

    .addPlugin(new IconfontPlugin({
      src: './assets/svg', // required - directory where your .svg files are located
      family: 'glyphs', // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
      dest: {
          font: './assets/font/[family].[type]', // required - paths of generated font files
          css: './assets/css/core/_iconfont.scss' // required - paths of generated css files
      },
      watch: {
          pattern: 'assets/svg/**/*.svg', // required - watch these files to reload
          cwd: './' // optional - current working dir for watching
      },
  }))
;

module.exports = Encore.getWebpackConfig();
