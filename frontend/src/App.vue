<template>
    <div class="flex flex-col h-screen bg-white max-w-cookbook mx-auto my-0 shadow-2xl shadow-gray-darker">
        <cb-header></cb-header>
        <main class="flex-1 px-8">
            <router-view/>
        </main>
        <cb-footer></cb-footer>
    </div>
</template>

<script setup lang="ts">
import CbHeader from "./components/cb-header";
import CbFooter from "./components/cb-footer";
</script>

<style lang="scss" scoped>
@import "css/global.css";
</style>
