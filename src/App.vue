<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheNav from '@/components/TheNav.vue';
  import PageTemperature from '@/components/pages/PageTemperature.vue';
</script>

<template>
  <TheHeader>Converter App</TheHeader>
  <TheNav />
  <main>
    <PageTemperature />
  </main>
</template>

<style scoped>
  main {
    padding: 2rem 1rem;
    max-width: 80rem;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
</style>

<style>
 * {
  box-sizing: border-box;
 }
 body {
  margin: 0;
  padding: 0;
  font-family: monospace;
 }
</style>