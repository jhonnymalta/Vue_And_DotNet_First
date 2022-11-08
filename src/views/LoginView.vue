<template>
  <div
    class="bg-gray-300 w-[30%] rounded flex flex-col align-center items-center m-auto p-4 h-[250px] min-w-[300px]"
  >
    <div class="text-4xl text-blue-500 text-center">Login</div>
    <form @submit.prevent="SubmitForm">
      <div class="">
        <label for="id" class="text-blue-500">E-mail</label><br />
        <input type="email" v-model="email" id="email" /><br />
      </div>
      <label for="password" class="text-blue-500">password</label><br />
      <input type="password" v-model="password" id="password" /><br />

      <button
        class="bg-cyan-500 text-white py-2 px-4 rounded shadow-md hover:bg-cyan-400 mt-4"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "../stores/userStore";
import { useRouter, useRoute } from "vue-router";
const styleColor = "color:#557717";
const userStore = useUserStore();
const router = useRouter();

let email = ref();
let password = ref();

const SubmitForm = async () => {
  try {
    const { data } = await axios({
      method: "post",
      url: "https://localhost:7276/login",
      data: { Email: email.value, PasswordHash: password.value },
      headers: { "Content-Type": "multipart/form-data" },
    });
    userStore.userName = data.email;
    userStore.logged = true;
    router.push("/home");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
