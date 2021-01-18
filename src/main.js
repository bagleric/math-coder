// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import store from '@/plugins/store'
import '@/assets/main.css'
import 'vuetify/dist/vuetify.min.css'

// import VueSanitize from "vue-sanitize";
import VueFormulate from '@braid/vue-formulate'
import '@braid/vue-formulate/dist/snow.min.css'
import Define from '@/components/Define.component.vue'
import axios from 'axios'

Vue.prototype.$http = axios
// Vue.use(VueSanitize);
Vue.use(VueFormulate)

Vue.config.productionTip = false

// Add un-imported components to ignore list to prevent warnings.
Vue.config.ignoredElements = [
  'field',
  'block',
  'category',
  'xml',
  'mutation',
  'value',
  'sep',
  'statement'
]

Vue.component('Define', Define)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
})
