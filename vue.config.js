const devHost = 'http://localhost:5000/kellyferrone/us-central1';
module.exports = {
  publicPath: process.env.VUE_APP_HOST,
  devServer: {
    proxy: {
      '/meta': {
        target: `${devHost}/metaFx`
      },
      '^/blog/*': {
        target: `${devHost}/blogFx`
      }
    }
  },
  chainWebpack: config => {

    //for coffee
    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('coffee-loader')
      .loader('coffee-loader')
      .end();

    // Exclude quill assets from file-loader
    config.module
      .rule("svg")
        .exclude
          .add(/node_modules[\\/]quill/)
          .end()

    // Add rule to load quill svg images as raw strings
    config.module
      .rule('quill-svg')
        .include
          .add(/node_modules[\\/]quill/)
          .end()
        .test(/\.(svg)(\?.*)?$/)
        .use('raw-loader')
          .loader('raw-loader')

  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: []
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "./src/theme/style.scss"`,
        options: {
          indentedSyntax: true
        }
      }
    }
  }
}


