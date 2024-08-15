<script setup>
import CardsFelids from "@/components/CardsFelids.vue";
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <Navbar></Navbar>
  <main>
    <CardsFelids></CardsFelids>
  </main>
</template>
<style scoped>
#contmaquina {
  width: 800px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}
#contmaquina2 {
  width: 800px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
}
#span1 {
  font-family: monospace;
  display: block;
  white-space: nowrap;

  width: 13ch;
  font-size: 100px;

  animation: typing 2s steps(13), blink 0.5s infinite step-end alternate;
  overflow: hidden;
}

#span2 {
  font-family: monospace;
  display: block;
  white-space: nowrap;

  width: 3ch;
  font-size: 100px;

  animation: typing 2.2s steps(3), blink 0.5s infinite step-end alternate;
  overflow: hidden;
}
@keyframes typing {
  from {
    width: 0;
  }
}
@keyframes blink {
  100% {
    border-color: transparent;
  }
}
</style>
