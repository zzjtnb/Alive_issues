import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import util from './utils/util'
import 'normalize.css'
import 'material-design-icons/iconfont/material-icons.css'
// 按需引入
import {
  Form, FormItem, Card, Button, Input, Message, Loading, Tag, Row, Col, Breadcrumb, BreadcrumbItem, Upload, Dialog
} from 'element-ui'
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Card);
Vue.use(Button);
Vue.use(Input);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Upload);
Vue.use(Dialog);
/**
 * Message不要用使用use引入,这样会在页面加载后没有进行任何操作，但是会自动弹出一次空的通知框
 * Vue.use(Message);
 */
Vue.prototype.$message = Message;
Vue.use(Loading.directive);
Vue.use(Tag);
Vue.use(Row);
Vue.use(Col);
/**
 * fastClick的300ms延迟
 */
import FastClick from 'fastclick'; // 引入插件
FastClick.attach(document.body); // 使用 fastclick

Vue.prototype.$util = util;
Vue.config.productionTip = false

/**
 * mavonEditor
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
