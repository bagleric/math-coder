// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import assign from 'lodash/assign'
import get from 'lodash/get'
import defaults from 'lodash/defaults'
import find from 'lodash/find'

import data from "@/forms/module2.js"

Vue.use(Vuex)
const defaultUser = {
  firstName: "",
  lastName: "",
  id: 0
};

export default new Vuex.Store({
  state: {
    user: defaultUser,
    isTesting: false,
    viewAllQuestions: false,
    executionWait: 1,
    data
  },
  mutations: {
    resetUser(state) {
      localStorage.removeItem('name');
      localStorage.removeItem('id');
      state.user = assign({}, state.user, defaultUser);
    },
    initializeStore(state) {
      state.user = defaultUser
      if (localStorage.getItem('firstName')) {
        state.user.firstName = localStorage.name;
      }
      if (localStorage.getItem('id')) {
        state.user.id = localStorage.id;
      }
    },
    updateUser(state, newUser) {
      localStorage.name = newUser.firstName;
      localStorage.id = newUser.id;
      state.user = assign({}, state.user, newUser);
    },
    toggleIsTesting(state) {
      state.isTesting = !state.isTesting;
    },
    setViewAllQuestions(state, value) {
      state.viewAllQuestions = value;
    },
    setExecutionWait(state, value) {
      state.executionWait = value;
    }
  },
  getters: {
    firstName: state => {
      return state.user.firstName;
    },
    userId: state => {
      return state.user.id;
    },
    isTesting: state => {
      return state.isTesting;
    },
    executionWait: state => {
      return state.executionWait;
    },
    viewAllQuestions: state => {
      return state.viewAllQuestions;
    },
    // dataGetters
    dataModules: state => {
      return [];
    },
    getModules: (state) => () => {
      return get(state, ["data", "modules"], []);
    },
    getModule: (state, getters) => (id) => {
      const mods = getters.getModules()
      return find(mods, (mod => mod.id === id))
    },
    getActivities: (state, getters) => (moduleId) => {
      const mod = getters.getModule(moduleId);
      return get(mod, ["activities"], []);
    },
    getActivity: (state, getters) => (moduleId, activityId) => {
      const activities = getters.getActivities(moduleId, activityId);
      return find(activities, act => act.id === activityId);
    },
    getWordDefinitions: (state, getters) => (moduleId) => {
      let mod = getters.getModule(moduleId);
      return get(mod, ["wordDefinitions"], {});
    },
    getWordDefinition: (state, getters) => (moduleId, word) => {
      const def = get(getters.getWordDefinitions(moduleId), [word])
      return defaults(def, {
        name: "Oops",
        definitionHtml:
          "Looks like we don't know that word. Ask your teacher for help."
      });
    },

  }
})
