import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import util from './utils/util'
import 'normalize.css'
// 按需引入
import {
  Form,
  FormItem, Card, Button, Input, Message, Loading, Tag, Row, Col,
} from 'element-ui'
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Card);
Vue.use(Button);
Vue.use(Input);
Vue.use(Message);
Vue.use(Loading.directive);
Vue.use(Tag);
Vue.use(Row);
Vue.use(Col);
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
Vue.prototype.$message = Message;
Vue.config.productionTip = false

/**
 * 
 */
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);
Vue.prototype.$markdown = function (value) {
  return mavonEditor.markdownIt.render(value)
}
Vue.prototype.$setTitle = function (title) {
  if (title) {
    document.title = store.state.configuration.htmlTitle + ' - ' + title
  } else {
    document.title = store.state.configuration.htmlTitle
  }
}
//为文章详情添加代码高亮
Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
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
