import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../commom/global.css'
import './router/guard.js'
import '../mock'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import * as echarts from 'echarts';
import Fragment from 'vue-fragment';
Vue.use(Fragment.Plugin);
Vue.prototype.$echarts=echarts;
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Antd);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
