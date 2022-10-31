<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="SubmitForm">
      <label for="id">E-mail</label><br />
      <input type="email" v-model="email" id="email" /><br />
      <label for="password">password</label><br />
      <input type="password" v-model="password" id="password" /><br />

      <button>Logar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios, { Axios } from "axios";

let email = ref();
let password = ref();
const SubmitForm = async () => {
  try {
    const { data } = await axios.get("https://localhost:7276");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
