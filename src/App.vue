<script setup>
  import TheHeader from '@/components/TheHeader.vue';
  import TheNav from '@/components/TheNav.vue';
  import { currentPage } from './stores/routes';

</script>

<template>
  <TheHeader>Converter App</TheHeader>
  <TheNav />
  <main>
    <!-- <PageTemperature v-if="anchor === 'temp'"/>
    <PageByte v-if="anchor === 'byte'"/> -->
    <component :is="currentPage" />
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