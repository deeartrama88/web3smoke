// plugins/near.client.js
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { ref, computed } from "vue";

export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    const { providers } = await import("near-api-js");

    const provider = new providers.JsonRpcProvider({
      url: "https://rpc.testnet.near.org",
    });

    const selector = await setupWalletSelector({
      network: "testnet",
      modules: [setupMyNearWallet()],
    });

    const modal = setupModal(selector, {});
    const isSignedIn = ref(selector.isSignedIn());
    const accountId = ref(
      isSignedIn.value ? selector.store.getState().accounts[0].accountId : "",
    );

    const signIn = async () => {
      const modal = setupModal(await selector, {
        contractId: "testnet.near",
      });
      modal.show();
    };

    const signOut = async () => {
      const wallet = await (await selector).wallet();
      wallet.signOut();
      accountId.value = "";
      isSignedIn.value = false;
    };

    selector.store.observable.subscribe(async (state) => {
      const signedAccount = state?.accounts.find(
        (account) => account.active,
      )?.accountId;
      accountId.value = signedAccount || "";
      isSignedIn.value = !!signedAccount;
    });

    return {
      provide: {
        isSignedIn: computed(() => isSignedIn.value),
        accountId: computed(() => accountId.value),
        signIn,
        signOut,
      },
    };
  }

  return {
    provide: {
      nearProvider: null,
    },
  };
});
