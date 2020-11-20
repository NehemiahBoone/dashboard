import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../services/AxiosService"
import moment from "moment"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {

  },
  actions: {
    async getCovidInfo({ commit, dispatch }) {
      try {
        debugger
        let info = await api.get("/daily")
        console.log(info.data)
        dispatch("mapData", info.data)
      } catch (error) {
        console.error(error);
      }
    },
    async mapData({ commit, dispatch }, data) {
      try {
        for (let i = 0; i < data.length; i++) {
          let set = data[i]
          let date = moment(set.date, "YYYYMMDD").format("MM/DD");
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
