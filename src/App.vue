<template>
  <div id="app"></div>
</template>


<script>
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
