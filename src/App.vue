<template>
  <div id="app"></div>
</template>


<script>
import moment from "moment";
import LineChart from "./components/LineChart";
export default {
  mounted() {
    this.$store.dispatch("logApi");
  },
  name: "App",
  component: {
    LineChart,
  },
};
</script>
<style>
</style>
