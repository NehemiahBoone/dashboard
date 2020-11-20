import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../services/AxiosService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
    async logApi({ commit, dispatch }) {
      try {
        let something = api.get("/current.json")
        console.log(something)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
