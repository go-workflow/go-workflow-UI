import Vue from 'vue'
import App from './App.vue'
import Node from './components/procdef/node'
import './assets/style.css'
Vue.component('Node', Node)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
