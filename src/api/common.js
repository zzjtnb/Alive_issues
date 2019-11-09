// 每个模块都应该有自己的接口文件去统一管理api
import { get, post } from '@/utils/request'
// 导入接口域名列表
import base from './base';
// export const query = (params) => get(`${base.sq}/pur/pay/pageInit`, params)
export const meanu = (params) => get('/data/menu.json')
