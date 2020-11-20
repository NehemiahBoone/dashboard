<template>
  <div id="app" class="container">
    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col">
        <h2>Positive</h2>
        <line-chart
          :chartData="arrPositive"
          :options="chartOptions"
          label="Positive"
        ></line-chart>
      </div>
    </div>
  </div>
</template>


<script>
import moment from "moment";
import LineChart from "./components/LineChart";
export default {
  mounted() {
    this.$store.dispatch("getCovidInfo");
  },
  name: "App",
  data() {
    return {};
  },
  computed: {
    positive() {
      return this.$store.state.arrPositive;
    },
    hospitalized() {
      return this.$store.state.arrHospitalized;
    },
    inIcu() {
      return this.$store.state.arrInIcu;
    },
    recovered() {
      return this.$store.state.arrRecovered;
    },
    deaths() {
      return this.$store.state.deaths;
    },
  },
  component: {
    LineChart,
  },
};
</script>
<style>
</style>
