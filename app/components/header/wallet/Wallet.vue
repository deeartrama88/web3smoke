<template>
  <div>
    <UDropdownMenu
      :items="items"
      :content="{
        align: 'start',
        side: 'bottom',
        sideOffset: 8,
      }"
      :ui="{
        content: 'w-48',
      }"
    >
      <UButton
        :label="menuLabel"
        icon="solar:wallet-outline"
        color="neutral"
        variant="outline"
      />
    </UDropdownMenu>
  </div>
</template>

<script setup lang="ts">
const { $signIn, $signOut, $accountId } = useNuxtApp();

const menuLabel = computed(() => {
  return $accountId.value
    ? $accountId.value.slice(0, 4) + "..." + $accountId.value.slice(-4)
    : "Connect wallet";
});

const items = computed(() => {
  return [
    {
      label: $accountId.value ? "Disconnect" : "Connect Wallet",
      icon: "i-lucide-wallet",
      onClick: $accountId.value ? $signOut : $signIn,
    },
  ];
});
</script>
