// vue.config.js
const path = require("path");
const addStyleResource = function (rule) {
  rule.use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, "./src/style/public.less")]
    })
};
module.exports = {
  baseUrl: '/',
  outputDir: 'dist', // 打包的目录
  lintOnSave: true, // 在保存时校验格式
  productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    open: true, // 启动服务后是否打开浏览器
    host: '0.0.0.0',
    port: 8080, // 服务端口
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'http://mooc.atelink.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }, // 设置代理
    before: app => { }
  },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [
  //         path.resolve(__dirname, '@/style/public.less'),
  //     ],
  //   },
  // },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)))
  },
  configureWebpack(config) {
    if (process.env.NODE_ENV === 'production') {
      const terserWebpackPlugin = config.optimization.minimizer[0]
      const terserOptions = terserWebpackPlugin.options.terserOptions
      terserOptions.compress['drop_console'] = true
    }
    Object.assign(config, {
      externals: {
        vue: 'Vue',
        // vuex: 'Vuex',
        'vue-router': 'VueRouter',
        // iview: 'iview',
        // vuecoms: 'vuecoms'
      }
    })
  },
}