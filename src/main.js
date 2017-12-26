import Vue from 'vue'
import lodash from 'lodash'
import infiniteScroll from 'vue-infinite-scroll'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueLodash, lodash)
Vue.use(infiniteScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
