<script setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { anchor, routes } from '@/stores/routes';

  function updateAnchor() {
    anchor.value = window.location.hash.substring(1);
  }

  onMounted(() => {
    window.addEventListener('hashchange', updateAnchor);
    updateAnchor();
  });

  onUnmounted(() => {
    window.removeEventListener('hashchange', updateAnchor);
  });

</script>

<template>
  <ul>
    <li v-for="route of routes">
      <a :href="'#' + route.anchor" :class="anchor == route.anchor ? 'active' : ''">
        {{ route.label }}
      </a>
    </li>
    <!-- <li>
      <a href="#temp" :class="anchor == 'temp' ? 'active' : ''">Temperature</a>
    </li>
    <li>
      <a href="#byte" :class="anchor == 'byte' ? 'active' : ''">Byte</a>
    </li> -->
  </ul>
</template>

<style scoped>
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #999;
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
  .active {
    color: tomato;
  }
</style>