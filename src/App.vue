<script setup>
  import { computed, ref } from 'vue';
  import TheHeader from './components/TheHeader.vue';
  import TheNav from './components/TheNav.vue';

  import BaseInputNumber from './components/bases/BaseInputNumber.vue';

  const tempSi = ref(0); // kelvin

  const kelvin = computed({
    get: () => {
      return tempSi.value;
    },
    set: (value) => {
      tempSi.value = value;
    }
  });

  const celcius = computed({
    get: () => {
      return tempSi.value - 273.15;
    },
    set: (value) => {
      tempSi.value = value + 273.15;
    }
  });

  const fahrenheit = computed({
    get: () => {
      return (tempSi.value - 273.15) * 9 / 5 + 32;
    },
    set: (value) => {
      tempSi.value = (value - 32) * 5 / 9 + 273.15;
    }
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
  <!-- <input type="number" v-model="tempSi"/> -->
  <BaseInputNumber
    class="si-unit"
    symbol="K"
    v-model="kelvin"
    name="kelvin"
  />
  <BaseInputNumber symbol="°C" v-model="celcius"/>
  <BaseInputNumber symbol="°F" v-model="fahrenheit"/>
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
