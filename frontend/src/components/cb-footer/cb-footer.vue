<template>
  <footer class="px-4">
    <hr class="line">
    <p class="text-center my-4">© 2023-2024 Foodie </p>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.line {
  @apply flex justify-center items-center mx-auto;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Ccircle cx='1' cy='4' r='1' fill='%23a7a7a2'/%3E%3C/svg%3E");
  background-position-y: center;
  background-repeat: repeat-x;
  border: 0;
  height: 8px;
}
</style>