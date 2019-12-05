import base from '@/api/base';
import { get, post, put, patch } from '@/utils/request'
const issues = {
  // 多个 state 的操作 , 使用 mutations 会来触发会比较好维护 , 那么需要执行多个 mutations 就需要用 action 了
  // 通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
  state: {
    issuesList: [],
    query: {
      page: 1,
      pageSize: 6,
      pageNumber: 1,
      total: 0,
    },
  },
  // 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
  mutations: {
    GET_ISSUESLIST: (state, value) => {//这里的state对应着上面这个state
      state.issuesList = value
    },
    GET_QUERY: (state, value) => {
      state.query = value
    }
  },

  /**
    Action 类似于 mutation，不同在于：
      Action 提交的是 mutation，而不是直接变更状态。
      Action 可以包含任意异步操作。
   */
  // dispactch方法调用action,mapAactions方法调用action
  actions: {
    GetIssuesList ({ commit }, value) {
      commit('GET_ISSUESLIST', value)
    },
    GetQuery ({ commit }, value) {
      commit('GET_QUERY', value)
    },
    SearchIssues ({ commit }, value) {
      get(`${base.github}/search/issues`, value).then((res) => {
        let data = res.data.items
        commit('GET_ISSUESLIST', data)
        let query = {
          page: this.getters.Query.page,
          pageSize: this.getters.Query.pageSize,
          pageNumber: Math.ceil(res.data.total_count / this.getters.Query.pageSize),//向上取整
          total: res.data.total_count
        }
        commit('GET_QUERY', query)
      })
    }
  }
}

export default issues