
import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'
import 'element-ui/packages/theme-chalk/lib/index.css'
import router from './router'
import store from './store'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
