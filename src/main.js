import Vue from 'vue'
import App from './App.vue'
import qky from './packages'

Vue.config.productionTip = false
Vue.use(qky)
new Vue({
  render: h => h(App)
}).$mount('#app')
