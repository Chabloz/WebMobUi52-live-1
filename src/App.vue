<script setup>
  import { computed, ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';

  const kelvin = ref(10);
  const celcius = computed(() => {
    return kelvin.value - 273.15;
  });

  // const temp = 20;
  // const temperature = ref(20);
  // console.log(temperature.value);
  // setTimeout(() => {
  //   temperature.value = 5;
  // }, 2000);

  // const isCold = computed(() => {
  //   return temperature.value < 10;
  // });

  // const test = ref([]);

  // function setKelvin(event) {
  //   kelvin.value = event.target.value;
  // }
</script>

<template>
  <TheHeader>Converter App</TheHeader>
  <TheNav></TheNav>

  <!-- <input type="number" :value="kelvin" @input="setKelvin"/> -->
  <input type="number" v-model="kelvin"/>
  <p>{{ kelvin }} K</p>
  <p>{{ celcius }} C</p>
</template>

<style scoped>

</style>

<style>
 * {
  box-sizing: border-box;
 }
 body {
  margin: 0;
  padding: 0;
  font-family: Consolas, monospace;
 }
</style>
