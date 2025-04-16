<template>
  <header class="bg-gray-800 text-white text-center">
    <div class="flex justify-between items-center px-4 py-2 container mx-auto">
      <UButton icon="i-lucide-sun" @click="$router.push('/home')" />
      <div class="flex items-end gap-4 justify-center">
        <User />
        <ClientOnly>
          <Wallet />
        </ClientOnly>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import User from "@/components/header/user/User.vue";
import Wallet from "@/components/header/wallet/Wallet.vue";
</script>
