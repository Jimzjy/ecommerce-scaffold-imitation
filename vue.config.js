module.exports = {
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ],
  publicPath: process.env.NODE_ENV === 'production' ? '/ecommerce-scaffold-imitation/' : '/'
}
