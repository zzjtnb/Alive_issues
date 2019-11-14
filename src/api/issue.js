// 每个模块都应该有自己的接口文件去统一管理api
import { get, post, put, patch } from '@/utils/request'
import store from '../store/index'
let githubUsername = store.state.configuration.githubUsername
// 导入接口域名列表
import base from './base';
// export const query = (params) => get(`${base.sq}/pur/pay/pageInit`, params)
export const meanu = (params) => get('/data/menu.json')

// export const getRecode = (params) => get(`${base.github}/repos/${githubUsername}/Alive/contents/public/data/record.json`)
// export const editRecode = (params) => put(`${base.github}/repos/${githubUsername}/Alive/contents/public/data/record.json`, params)
export const getIssues = (params) => get(`${base.github}/repos/${githubUsername}/zzjtnb/issues`, params)
export const getLabels = (params) => get(`${base.github}/repos/${githubUsername}/zzjtnb/labels`, params)
export const create = (params) => post(`${base.github}/repos/${githubUsername}/zzjtnb/issues`, params)
