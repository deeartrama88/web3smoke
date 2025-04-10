<template>
  <div>
    <h2>Processing authentication...</h2>
    <p>Please wait while we complete your connection.</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import useNearWallet from "~/composables/useNearSelector";

const router = useRouter();
const { initNear, checkConnection } = useNearWallet();

onMounted(async () => {
  // Initialize NEAR and check connection
  await initNear();
  const isConnected = await checkConnection();

  // Redirect to home or dashboard after processing
  setTimeout(() => {
    router.push("/");
  }, 1500);
});
</script>

<style scoped>
.auth-callback {
  text-align: center;
  padding: 2rem;
}
</style>
