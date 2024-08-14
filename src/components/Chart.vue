<script lang="js">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";

// Asegúrate de que los componentes necesarios están registrados.
ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Pie,
  },
  data() {
    return {
      data: {
        labels: ["Felids", "Canids", "Reptiles", "Mustelids", "Leporidae"],
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
        plugins: {
          legend: {
            labels: {
              font: {
                size: 25
              },
              color: 'black'
            }
          }
        }
      },
    };
  },
};
</script>
<template>
  <main>
    <div id="boxCont">
      <div id="boxTotal">
        <h2 class="bord">TOTAL</h2>
        <h2 class="wave">TOTAL</h2>
      </div>
      <div id="boxAnimals">
        <h2 class="bord">120</h2>
        <h2 class="wave">120</h2>
      </div>
    </div>
    <div id="boxChart">
      <div id="chart">
        <Pie :data="data" :options="options" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  min-height: 810px;
}
#boxTotal {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#boxAnimals {
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#chart {
  width: 100%;
  height: 650px;
}
#boxCont {
  width: 100%;
  height: 800px;
}
#boxChart {
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
}
main {
  display: grid;
  grid-template-columns: 50% 50%;
}

h2 {
  font-size: 250px;
  position: absolute;
  animation: slideUp 2.4s ease-in-out forwards;
}

.bord {
  color: #2d3e50;
}

.wave {
  color: #3fb37e;
  animation: wave 3s ease-in-out infinite;
}
@keyframes slideUp {
  from {
    transform: translateY(40%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes wave {
  0%,
  100% {
    clip-path: polygon(
      0% 47%,
      10% 48%,
      33% 54%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
@media (max-width: 480px) {
  #chart {
    margin-left: 1%;
    margin-right: 5%;
    width: 85%;
  }

  main {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
  #boxChart {
    width: 100%;
    height: 700px;
  }
  #boxCont {
    width: 100%;
    height: 300px;
    text-align: center;
  }
  h2 {
    font-size: 100px;
  }
}
</style>
