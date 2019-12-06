import { get, post, put, patch } from '@/utils/request'
import store from '../store/index'
import base from './base';
export default {
  searchIssues: function (params) {
    console.log(store.getters.Query);
    let githubUsername = store.state.configuration.githubUsername
    return get(`${base.github}/search/issues?page=${store.getters.Query.page}&per_page=${store.getters.Query.pageSize}&sort=created&order=desc`, params);
  },
}