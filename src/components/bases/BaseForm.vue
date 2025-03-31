<script setup>

</script>

<template>
  <form>
    <slot></slot>
  </form>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
  }
</style>