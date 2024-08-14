<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Navbar> </Navbar>
  <main>
    <RouterView />
  </main>
  <Footer> </Footer>
</template>

<style scoped>
main {
  width: 100%;
  margin: 0 auto;
  background-color: white;
  background-image: url("../src/assets/homeLion2.png");
  background-size: 100%;
  object-fit: cover;
}
@media (max-width: 480px) {
  main {
    background-image: url("");
  }
}
</style>
