// 每个模块都应该有自己的接口文件去统一管理api
import { get, post, put, patch } from '@/utils/request'
import store from '../store/index'
let githubUsername = store.state.configuration.githubUsername
// 导入接口域名列表
import base from './base';
// export const query = (params) => get(`${base.sq}/pur/pay/pageInit`, params)

export const createIssue = (params) => post(`${base.github}/repos/${githubUsername}/zzjtnb/issues`, params)
export const editIssue = (params, number) => patch(`${base.github}/repos/${githubUsername}/zzjtnb/issues/${number}`, params)
export const deleteIssue = (params, number, config) => put(`${base.github}/repos/${githubUsername}/zzjtnb/issues/${number}/lock`, params, config)
export const getIssues = (params) => get(`${base.github}/repos/${githubUsername}/zzjtnb/issues/${params}`)
export const getIssuesList = (allQuery, params) => get(`${base.github}/repos/${githubUsername}/zzjtnb/issues?page=${allQuery.page}&per_page=${allQuery.pageSize}`, params)
export const getLabels = (params) => get(`${base.github}/repos/${githubUsername}/zzjtnb/labels`, params)
export const UploadImageApi = (params, name, config) => put(`${base.github}/repos/${githubUsername}/images/contents/test/${name}`, params, config)

