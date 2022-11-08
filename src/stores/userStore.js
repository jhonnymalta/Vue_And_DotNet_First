import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", {
  state: () => ({
    userName: ref(""),
    logged: ref(false),
  }),
  getters: {},
  getters: {},
});
