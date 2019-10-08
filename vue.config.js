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


