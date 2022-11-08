<template>
  <div>
    <h1>404</h1>
    <h2>NOT FOUND</h2>
    <button @click="voltar">Voltar</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const voltar = () => {
  router.push("/login");
};
</script>

<style lang="scss" scoped></style>
