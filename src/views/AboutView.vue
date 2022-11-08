<template>
  <div>
    <div class="mx-auto text-white">
      <h2 class="text-[4em]">About Page</h2>
      <span @click="seguir">Home</span>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const seguir = () => {
  router.push("/home");
};
</script>

<style lang="scss" scoped></style>
