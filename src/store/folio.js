import { defineStore } from "pinia";
import { profile } from "../providers/data-provider";

export const useFolio = defineStore("folioStore", {
  state: () => {
    return {
      profile,
    };
  },
  getters: {},
});
