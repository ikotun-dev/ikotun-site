// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// vue.config.js file to be placed in the root of your repository

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/ikotun-site/'
    : '/'
}