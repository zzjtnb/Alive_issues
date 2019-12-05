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
  getInfo: function () {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `${base.github}/users/` + githubUsername
    })
  },
  followers: function (query) {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `${base.github}/users/${githubUsername}/followers?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  following: function (query) {
    let githubUsername = store.state.configuration.githubUsername
    return request({
      url: `${base.github}/users/${githubUsername}/following?page=${query.page}&per_page=${query.pageSize}`
    })
  },
  info: function (githubUsername) {
    return request({
      url: `${base.github}/users/${githubUsername}`
    })
  },
}