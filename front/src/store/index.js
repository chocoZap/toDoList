import Vue from 'vue'
import Vuex from 'vuex'
import talkList from "./modules/talkList.js";
import http from "./https.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    http,
    talkList
  }
})
