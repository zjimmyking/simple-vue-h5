module.exports = {
  //此处设置  为了  配置到 githubPage 可删除 默认为 ‘’
  // assetsDir:'.',
  // publicPath: './',
  devServer: {
    // port: 80,
    disableHostCheck: true,
    proxy: {
      '/api': { // 需要转发的接口，如果全转发就设置根就行/
        target: 'https://xxxxxx.com/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        // 根据自己样式文件的位置调整
        prependData: '@import "@/assets/scss/global.scss";'
      },
      postcss: {
        plugins: [
          require('postcss-px-to-viewport')({
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 3,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore', '.hairlines', /^\.dp/, /^\.scroller/, /^\.van/],
            minPixelValue: 1,
            mediaQuery: false
          })
        ]
      }
    }
  }
};
