<script setup>
  import { computed, ref } from 'vue';
  import BaseInputNumber from '@/components/bases/BaseInputNumber.vue';
  import { roundToDecimalPlaces } from '@/utils/math.js';
  import BaseForm from '@/components/bases/BaseForm.vue';

  const tempSi = ref(0); // Temp SI unit: kelvin

  const kelvin = computed({
    get: () => roundToDecimalPlaces(tempSi.value),
    set: (value) => {
      if (value=='') return;
      tempSi.value = value;
    }
  });

  const celcius = computed({
    get: () => roundToDecimalPlaces(tempSi.value - 273.15),
    set: (value) => {
      if (value=='') return;
      tempSi.value = value + 273.15;
    }
  });

  const fahrenheit = computed({
    get: () => roundToDecimalPlaces(tempSi.value - 273.15 * 9 / 5 + 32),
    set: (value) => {
      if (value=='') return;
      tempSi.value = (value - 32) * 5 / 9 + 273.15;
    }
  });
</script>

<template>
  <BaseForm>
    <BaseInputNumber
      symbol="K"
      v-model="kelvin"
      name="kelvin"
    />
    <BaseInputNumber
      symbol="°C"
      v-model="celcius"
      name="celcius"
    />
    <BaseInputNumber
      symbol="°F"
      v-model="fahrenheit"
      name="fahrenheit"
    />
  </BaseForm>
</template>

<style scoped>

</style>