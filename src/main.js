// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import '@/assets/main.css'
import 'vuetify/dist/vuetify.min.css'

// import VueSanitize from "vue-sanitize";
import VueFormulate from '@braid/vue-formulate'
import '@braid/vue-formulate/dist/snow.min.css'

// Vue.use(VueSanitize);
Vue.use(VueFormulate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  components: { App },
  template: '<App/>'
})
