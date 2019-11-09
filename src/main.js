import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import util from './utils/util'
import 'normalize.css'
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


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
