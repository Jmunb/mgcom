import Vue from 'vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueLodash, lodash)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
