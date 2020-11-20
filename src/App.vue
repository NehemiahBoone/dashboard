<template>
  <div id="app" class="container">
    <div class="row mt-5" v-if="positive.length > 0">
      <div class="col">
        <h2>Positive</h2>
        <line-chart
          :chartData="positive"
          :options="chartOptions"
          label="Positive"
        />
      </div>
    </div>
  </div>
</template>


<script>
import moment from "moment";
import LineChart from "./components/LineChart.vue";
export default {
  components: { LineChart },
  mounted() {
    this.$store.dispatch("getCovidInfo");
  },
  name: "App",
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
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
