// 每个模块都应该有自己的接口文件去统一管理api
import { get, post, put, patch } from '@/utils/request'
import store from '@/store/index'
let githubUsername = store.state.configuration.githubUsername
// 导入接口域名列表
import base from './base';

export const searchIssues = (data, params) => get(`${base.github}/search/issues?q=${data.keyword}+state:open+repo:${data.repo}/${data.repo}`, params);