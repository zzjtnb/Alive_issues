import request from '../utils/request'
import store from '../store/index'
import base from './base';
export default {
  verifyToken: function (token) {
    return request({
      url: `${base.github}/user?access_token=` + token
      // url: `${base.github}/user`
    })
  },
}