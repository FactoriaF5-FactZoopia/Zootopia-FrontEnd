<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/counter">Counter</RouterLink>
  <RouterLink to="/form">Form</RouterLink>
  <RouterLink to="/animals">Animals</RouterLink>
    </nav>
  <RouterView />
</template>

<style scoped>
</style>
