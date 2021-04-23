import Vue from 'vue'
import App from './App.vue'
import './assets/lib/bootstrap/3.3.0/css/bootstrap.min.css'
import './assets/css/main.css'
import qky from 'qky'
Vue.config.productionTip = false
Vue.use(qky)
new Vue({
  render: h => h(App)
}).$mount('#app')
