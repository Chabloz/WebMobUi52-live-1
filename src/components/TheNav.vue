<script setup>

</script>

<template>
  <ul>
    <li>
      <a href="#temp">Temperature</a>
    </li>
    <li>
      <a href="#byte">Byte & co.</a>
    </li>
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #777;
  }
  li {
    display: inline;
    flex: 1;
    text-align: center;
  }
  a {
    padding: 0.3rem;
    text-decoration: none;
    color: whitesmoke;
    display: block;
  }
  a:hover {
    color: tomato;
  }
</style>