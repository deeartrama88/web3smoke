import { defineStore } from "pinia";

export const useWalletStore = defineStore("wallet", {
  state: () => ({
    accountId: "",
    balance: 0,
  }),
});
