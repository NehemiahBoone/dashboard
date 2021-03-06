import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "../services/AxiosService"
import moment from "moment"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arrPositive: [],
    arrHospitalized: [],
    arrInIcu: [],
    arrOnVentilators: [],
    arrRecovered: [],
    arrDeaths: [],
  },
  mutations: {
    setPositive(state, positiveObj) {
      state.arrPositive.push(positiveObj)
    },
    setHospitalized(state, hospitalizedObj) {
      state.arrHospitalized.push(hospitalizedObj)
    },
    setInIcu(state, inIcuObj) {
      state.arrInIcu.push(inIcuObj)
    },
    setOnVentilators(state, onVentilatorsObj) {
      state.arrOnVentilators.push(onVentilatorsObj)
    },
    setRecovered(state, recoveredObj) {
      state.arrRecovered.push(recoveredObj)
    },
    setDeaths(state, deathsObj) {
      state.arrDeaths.push(deathsObj)
    }
  },
  actions: {
    async getCovidInfo({ commit, dispatch }) {
      try {
        let info = await api.get("/daily")
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

          const {
            positive,
            hospitalizedCurrently,
            inIcuCurrently,
            onVentilatorCurrently,
            recovered,
            death
          } = set;

          commit("setPositive", { date, total: positive })
          commit("setHospitalized", { date, total: hospitalizedCurrently })
          commit("setInIcu", { date, total: inIcuCurrently })
          commit("setOnVentilators", { date, total: onVentilatorCurrently })
          commit("setRecovered", { date, total: recovered })
          commit("setDeaths", { date, total: death })
        }
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
