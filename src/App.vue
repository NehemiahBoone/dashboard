<template>
  <div id="app"></div>
</template>


<script>
import moment from "moment";
export default {
  mounted() {
    this.$store.dispatch("logApi");
  },
  name: "App",
  component: {},
};
</script>
<style>
</style>
