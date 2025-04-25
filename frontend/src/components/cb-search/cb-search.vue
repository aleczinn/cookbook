<template>
  <form method="post" action="/search">
    <div class="relative">
      <icon-search class="absolute bottom-0 left-4 top-1/2 flex items-center pointer-events-none w-4 h-4 text-gray-darker" style="transform: translateY(-50%);"></icon-search>
      <input type="search" placeholder="Suche..." class="block w-full p-2 pl-12 bg-white border-1 border-gray rounded-xl focus:border-black focus:outline-none input">
    </div>
  </form>
</template>

<script setup lang="ts">

import IconSearch from "../../icons/icon-search.vue";
</script>

<style scoped lang="scss">
/* clears the ‘X’ from Internet Explorer */
input::-ms-clear {
  display: none;
  width: 0;
  height: 0;
}

input::-ms-reveal {
  display: none;
  width: 0;
  height: 0;
}

/* clears the ‘X’ from Chrome */
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {
  display: none;
}
</style>