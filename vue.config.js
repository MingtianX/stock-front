const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages:{
    index:{
      entry: './src/pages/main.js',
      template: './src/pages/index.html',
      filename:'index.html'

    },
    // login:{
    //   entry: './src/pages/index/login.js',
    //   template:'./src/pages/login/login.html',
    //   filename:'login.html'
    // }
  }
})
