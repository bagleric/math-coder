// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'mdi' // default - only for display purposes
  },
  theme: {
    themes: {
      light: {
        primary: '#1583d8',
        secondary: '#607d8b',
        accent: '#673ab7',
        error: '#f44336',
        warning: '#ff9800',
        info: '#00bcd4',
        success: '#4caf50'
      }
    }
  }
}

export default new Vuetify(opts)
