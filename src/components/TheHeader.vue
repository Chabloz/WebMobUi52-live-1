<script setup>

</script>

<template>
  <header>
    <h1><slot></slot></h1>
  </header>
</template>

<style scoped>
  header {
    background-color: #333;
    color: white;
    padding: .2rem;
  }
  h1 {
    margin: 1rem;
    color: tomato;
    text-align: center;
  }

</style>