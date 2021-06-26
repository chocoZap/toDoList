import Vue from 'vue';
import Vuex from 'vuex';
import task from "./modules/task.js";
import http from "./https.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    http,
    task
  }
});
