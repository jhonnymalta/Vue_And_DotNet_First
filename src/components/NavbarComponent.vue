<template>
  <div class="bg-gray-100 grid grid-cols-2 content-center">
    <div>
      <h2 class="text-4xl ml-6">Navbar</h2>
    </div>
    <div>
      <ul class="">
        <li @click="logout">Logout</li>
      </ul>
      <div>
        <h3>Usuário:{{ userStore.userName }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/userStore";
import { useRouter } from "vue-router";
const userStore = useUserStore();
const router = useRouter();

const logout = () => {
  userStore.logged = false;
  userStore.userName = null;
  router.push("/login");
};
</script>

<style lang="scss" scoped></style>
