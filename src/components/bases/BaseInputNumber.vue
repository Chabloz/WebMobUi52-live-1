<script setup>
  defineOptions({
    inheritAttrs: false, // disable inheritAttrs to the root element, so use v-bind="$attrs" to pass all attributes to the input element
  });
  defineProps({
    symbol: {
      type: String,
      default: null,
    }
  });
  // two-way binding avec v-model du parent
  const model = defineModel();
</script>

<template>
  <div>
    <input type="number" v-model="model" v-bind="$attrs">
    <abbr v-if="symbol != null">{{ symbol }}</abbr>
  </div>
</template>

<style scoped>
  input[type="number"] {
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
  }

  abbr {
    margin-left: 5px;
    font-size: 16px;
  }
</style>