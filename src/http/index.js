import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
const baseURL = 'http://localhost:9999'
// 全局默认配置
axios.defaults.baseURL = baseURL
axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.timeout = 3000
/**
 * 封闭get方法
 * @param url  String
 * @param params Object
 * @returns {promise}
 */
function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params
    })
      .then(res => {
        // res 包含当前请求的所有信息，是一个大对象，例：res=>{config:{},data:{},headers:{}...等等},里面的res.data才是后台返回的数据
        if (res.data.code == 0) {
          resolve(res.data)
        } else {
          Message.error({ message: '出现错误' })
        }
      })
      .catch(err => {
        reject(err)
        Message.error({ message: '出现错误' })
      })
  })
}
/**
 * 封闭postJson方法,
 * @param url  String
 * @param data Object
 * @returns {promise}
 */
function postJson(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data, //默认类型是json 全局已加
      transformRequest: [
        function(data) {
          //   允许在向服务器发送前，修改请求数据,只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
          // 对data进行转换
          return data
        }
      ]
    })
      .then(res => {
        if (res.data.code == 0) {
          resolve(res.data)
        } else {
          Message.error({ message: '出现错误' })
        }
      })
      .catch(err => {
        reject(err)
        Message.error({ message: '出现错误' })
      })
  })
}

/**
 * 封闭postForm方法,
 * @param url  String
 * @param data Object
 * @returns {promise}
 */
function postForm(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(res => {
        if (res.data.code == 0) {
          resolve(res.data)
        } else {
          Message.error({ message: '出现错误' })
        }
      })
      .catch(err => {
        reject(err)
        Message.error({ message: '出现错误' })
      })
  })
}
/** 下载*/
function downloadFile(url, params = {}) {
  // qs.stringify()将对象序列化成URL的形式，以&进行拼接 qs.parse()将url解析成对象的形式。
  window.open(`${window.location.host}${url}?${qs.stringify(params)}`)
}
// 请求拦截器
axios.interceptors.request.use(
  config => {
    //在发送请求之前处理些什么
    return config
  },
  err => {
    //对于请求错误的处理
    return Promise.reject(err)
  }
)
//响应拦截器
axios.interceptors.response.use(
  res => {
    //对响应数据做点什么
    return res
  },
  err => {
    // 对响应错误做提示
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          console.log('可以是参数传错了')
          break
        case 401:
          console.log('未授权重新登录')
          break
        case 500:
          console.log('服务器错误')
          break
        default:
          console.log(`连接错误${err.response.status}`)
      }
    } else {
      console.log('与服务器连接失败')
    }
  }
)

export default {
  install(Vue) {
    Vue.prototype.$api = {
      get,
      postJson,
      postForm,
      downloadFile
    } //使用方法 this.$api.get()
    Object.assign(Vue.prototype, {
      $get: get,
      $post: postJson,
      $postForm: postForm,
      $downloadFile: downloadFile
    }) //使用方法 this.$get()
  }
}
