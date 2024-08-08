<script lang="js">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Pie,
  },
  data() {
    return {
      data: {
        labels: ["Felids", "Canids", "Reptiles", "Mustelids", "Leporidae "],
        datasets: [
          {
            backgroundColor: ["#41B883", "#153750", "#4ac6af", "#22bbb7", "#5ef58e"],
            data: [30, 20, 80, 10, 20],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
<template>
  <main>
    <div id="chart">
      <Pie :data="data" :options="options" />
    </div>
  </main>
</template>

<style scoped>
#chart {
  height: 650px;
  margin-top: 60px;
}
@media (max-width: 480px) {
  #chart {
    margin-left: 5%;
    margin-right: 5%;
  }
}
</style>
