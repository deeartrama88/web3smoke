import { defineStore } from "pinia";
import { Wallet } from "../web3/near";

type WalletState = {
  wallet: Wallet | null;
};

export const useWalletStore = defineStore<"wallet", WalletState>("wallet", {
  state: () => {
    return { wallet: null };
  },

  actions: {
    setWallet(wallet: Wallet) {
      this.wallet = wallet;
    },
  },
});
