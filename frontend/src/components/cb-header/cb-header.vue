<template>
  <header class="flex justify-between items-center mx-8 py-4 mb-4 border-b-1 border-b-gray">
    <router-link class="flex items-center w-72" to="/">
<!--      <img src="/images/logo.png" alt="logo" width="290" height="140" class="w-28">-->
        Kochbuch
    </router-link>

    <ul class="flex flex-row text-gray-darkest">
      <li><router-link to="/" class="p-4 duration-200 hover:text-primary hover:cursor-pointer">Home</router-link></li>
      <li><router-link to="/recipe" class="p-4 duration-200 hover:text-primary hover:cursor-pointer">Rezepte</router-link></li>
      <li><router-link to="/ingredient" class="p-4 duration-200 hover:text-primary hover:cursor-pointer">Zutaten</router-link></li>
      <li><router-link to="/about" class="p-4 duration-200 hover:text-primary hover:cursor-pointer">Über Uns</router-link></li>
    </ul>

    <div>
      <cb-search class="w-72"></cb-search>
    </div>
  </header>
</template>

<script setup lang="ts">
import CbSearch from "../cb-search/cb-search.vue";
</script>

<style scoped lang="scss">

</style>