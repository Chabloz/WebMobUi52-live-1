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
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  input[type="number"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    box-sizing: border-box;
    flex: 1;
  }
  abbr {
    margin-left: 0.2rem;
    color: #333;
    padding: 0 0.5rem;
    min-width: 3rem;
    font-size: 1.2rem;
  }
</style>