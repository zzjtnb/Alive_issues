import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'
// import { vsNotifications } from 'vuesax'
// let loadingInstance = null     // 加载全局的loading
// 创建一个axios的自定义的实例service，并且可以自定义其配置
const service = axios.create({
  //接口请求地址
  baseURL: "https://api.github.com",
  //`timeout`选项定义了请求发出的延迟毫秒数。如果请求花费的时间超过延迟的时间，那么请求会被终止
  timeout: 15000,
})

/**
 * 一些常见的http状态码信息
 */
let httpCode = {
  400: '请求参数错误',
  401: '权限不足, 请重新登录',
  403: '服务器拒绝本次访问',
  404: '请求资源未找到',
  500: '内部服务器错误',
  501: '服务器不支持该请求中使用的方法',
  502: '网关错误',
  504: '网关超时'
}

/**
 * 给自定义的axios实例service添加一个请求拦截器
 */
service.interceptors.request.use(config => {
  // 在发送请求之前做些什么，比如传token
  let token = store.state.token.token
  if (token) {
    let sp = "?"
    if (config.url.indexOf("?") >= 0) {
      sp = "&"
    }
    config.url = config.url + sp + "access_token=" + token
  }
  /*   loadingInstance = Loading.service({       // 发起请求时加载全局loading，请求失败或有响应时会关闭
    spinner: 'fa fa-spinner fa-spin fa-3x fa-fw',
    text: '拼命加载中...'
  })
  // 在这里：可以根据业务需求可以在发送请求之前做些什么:例如我这个是导出文件的接口，因为返回的是二进制流，所以需要设置请求响应类型为blob，就可以在此处设置。
  if (config.url.includes('pur/contract/export')) {
    config.headers['responseType'] = 'blob'
  }
  // 我这里是文件上传，发送的是二进制流，所以需要设置请求头的'Content-Type'
  if (config.url.includes('pur/contract/upload')) {
    config.headers['Content-Type'] = 'multipart/form-data'
  } */
  return config
}, error => {
  // 对请求错误做些什么
  console.log(error) // for debug
  return Promise.reject(error);
})
/**
 * 给自定义的axios实例service添加一个响应拦截器
 */
service.interceptors.response.use(response => {
  //在这里对返回的数据进行处理
  // let responseJson = response.data
  console.log(response)
  if (response.data.status === '200') {     // 响应结果里的status: ok是我与后台的约定，大家可以根据实际情况去做对应的判断
    console.log(111)
    return response.data
    // return Promise.resolve(response.data)
  } else {
    Vue.prototype.$vs.notify({
      title: 'Color',
      text: response.data.message,
    })
    return response.data.message
    // return Promise.reject(response.data.message)
  }
}, error => {
  if (error.response) {
    // 根据请求失败的http状态码去给用户相应的提示
    let tips = error.response.status in httpCode ? httpCode[error.response.status] : error.response.data.message
    Vue.prototype.$vs.notify({
      title: 'Color',
      text: tips,
    })
    if (error.response.status === 401) {    // token或者登陆失效情况下跳转到登录页面，根据实际情况，在这里可以根据不同的响应错误结果，做对应的事。这里我以401判断为例
      router.push({
        path: `/login`
      })
    }
    return error
    // return Promise.reject(error)
  } else {
    Vue.prototype.$vs.notify({
      title: 'Color',
      text: 'Lorem ipsum dolor sit amet, consectetur',
    })
    // Message({
    //   message: '请求超时, 请刷新重试',
    //   type: 'error'
    // })
    return Promise.reject(new Error('请求超时, 请刷新重试'))
  }
})
/* 统一封装get请求 */
// export const get = (url, params, config = {}) => {
//   return new Promise((resolve, reject) => {
//     instance({
//       method: 'get',
//       url,
//       params,
//       ...config
//     }).then(response => {
//       resolve(response)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }

/* 统一封装post请求  */
// export const post = (url, data, config = {}) => {
//   return new Promise((resolve, reject) => {
//     instance({
//       method: 'post',
//       url,
//       data,
//       ...config
//     }).then(response => {
//       resolve(response)
//     }).catch(error => {
//       reject(error)
//     })
//   })
// }

export default service
