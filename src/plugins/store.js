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

export default new Vuex.Store({
  state: {
    user: {
      firstName: "",
      lastName: "",
      id: 0
    },
    isTesting: false,
    viewAllQuestions: false,
    executionWait: 1,
    data
  },
  mutations: {
    updateUser(state, newUser) {
      assign(state.user, newUser);
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
