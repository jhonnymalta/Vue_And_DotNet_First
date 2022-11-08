<script setup>
import { useUserStore } from "@/stores/userStore.js";
import { RouterLink, RouterView } from "vue-router";
import NavbarComponentVue from "./components/NavbarComponent.vue";

const useStore = useUserStore();
</script>

<template>
  <div class="grid grid-cols-1">
    <div v-if="useStore.logged">
      <NavbarComponentVue class="h-[70px]" />
    </div>
    <RouterView class="justify-center" />
  </div>
</template>

<style>
body {
  max-height: 100vh;
  background-color: rgb(50, 90, 100);
}
</style>
