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

  /** 配置 proxy 代理解决跨域问题
   *  反向代理- 它支持webPack - dev - server的所有选项 
   */
  devServer: {
    // 让浏览器 overlay 同时显示警告和错误
    // overlay: {
    //   warnings: true,
    //   errors: true
    // },
    // open: false, // 是否启动完毕自动在浏览器打开
    // host: "localhost",
    // port: "8080", // 代理断就
    // https: false,// https:{type:Boolean}
    // hotOnly: false, // 热更新
    /* proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
     * 下面是配置多个代理 
    */
    proxy: {
      '/api': {
        target: 'https://api.zzjtnb.com', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 是否跨域 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      },
      '/github': {
        target: 'https://api.github.com', // 目标代理接口地址
        secure: false,
        changeOrigin: true, // 是否跨域 开启代理，在本地创建一个虚拟服务端
        // ws: true, // 是否启用websockets
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },

  // 配置pwa
  pwa: {
    name: "争逐",
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

  runtimeCompiler: true,
  productionSourceMap: false,

  css: {
    // loaderOptions: {
    //   postcss: {
    //     plugins: [
    //       require("postcss-pxtorem")({
    //         // 把px单位换算成rem单位
    //         rootValue: 75, // 换算的基数(设计图750的根字体为75,如果设计图为640:则rootValue=64) //基准值(计算公式：设计图宽度/10)，设计图尺寸为750X1134(iPhone6)，基准值为750/10=75
    //         propList: ["*"],
    //         //不参与转换的样式
    //         selectorBlackList: ['van']
    //       })
    //     ]
    //   }
    // },
    extract: false
  }
};
