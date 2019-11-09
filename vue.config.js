const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  //build文件大小分块
  configureWebpack: {
    //关闭文件过大提示，利于打包加快速度
    performance: {
      //入口起点的最大体积
      maxEntrypointSize: 10000,
      //生成文件的最大体积250000 (bytes)。
      maxAssetSize: 25000,
    },
    //公共代码抽离和代码分割，避免单个js文件过大
    optimization: {
      splitChunks: {
        minSize: 10000, // int (in bytes),
        maxSize: 25000 // int (in bytes),
      }
    }
  },

  // 配置 proxy 代理解决跨域问题
  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    // open: false, // 是否打开浏览器
    // host: "localhost",
    // port: "8080", // 代理断就
    // https: false,
    // hotOnly: false, // 热更新
    proxy: {
      '/api': {
        target:
          'https://www.easy-mock.com/mock/5bc75b55dc36971c160cad1b/sheets', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

  // 配置pwa
  pwa: {
    name: "股票",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "blue",
    themeColor: "#50E3C2",
    msTileColor: "#4A90E2"
  },

  chainWebpack: config => {
    // 修复 HMR(热更新)失效
    config.resolve.symlinks(true);
    /*
     *压缩图片
     *npm i -D image-webpack-loader
     */
    config.module
      .rule("images")
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        mozjpeg: { progressive: true, quality: 65 },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 }
      });
  },

  runtimeCompiler: true
};
