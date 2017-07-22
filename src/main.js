import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
import store from './store/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
