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
    return {
      arrPositive: [],
      arrHospitalized: [],
      arrInIcu: [],
      arrOnVentilators: [],
      arrRecovered: [],
      arrDeaths: [],
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  component: {
    LineChart,
  },
};
</script>
<style>
</style>
