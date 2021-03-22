import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToasted from 'vue-toasted'


Vue.config.productionTip = false
Vue.use(VueToasted, {iconPack : 'fontawesome'})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
