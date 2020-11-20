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
        debugger
        let something = await api.get("/daily")
        console.log(something.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
