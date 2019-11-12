import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import util from './utils/util'
import 'normalize.css'
/**
 * fortawesome
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText }
  from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
/**
 * fastClick的300ms延迟
 */
import FastClick from 'fastclick'; // 引入插件
FastClick.attach(document.body); // 使用 fastclick
/**
 * Vuesax UI
 */
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax);
Vue.prototype.$util = util;
Vue.config.productionTip = false

Vue.prototype.$setTitle = function (title) {
  if (title) {
    document.title = store.state.configuration.htmlTitle + ' - ' + title
  } else {
    document.title = store.state.configuration.htmlTitle
  }
}
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
