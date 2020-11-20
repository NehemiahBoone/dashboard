<script>
import { Line } from "vue-chartjs";
export default {
  mounted() {
    let dates = this.chartData.map((d) => d.data).reverse();
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
};
</script>