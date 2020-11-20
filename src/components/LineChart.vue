<script>
import { Line } from "vue-chartjs";
export default {
  name: "LineChart",
  extends: Line,
  props: {
    label: {
      type: String,
    },
    chartData: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
    debugger;
    let dates = this.chartData.map((d) => d.date).reverse();
    console.log(dates);
    let totals = this.chartData.map((d) => d.total).reverse();

    this.renderChart(
      {
        labels: dates,
        datasets: [
          {
            label: this.label,
            data: totals,
          },
        ],
      },
      this.options
    );
  },
};
</script>