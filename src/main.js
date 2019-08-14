// main.js这是项目的核心文件。全局的配置都在这个文件里面配置
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './routes.js'
import './assets/styles/base.css'

Vue.config.debug = true// 开启错误提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#appIndex',
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
