<template>
  <footer class="bg-gray-800 text-white py-4 text-center">
    <nav class="inline-block">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/home">
            <UButton icon="solar:home-outline" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/wallet">
            <UButton icon="solar:wallet-linear" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user">
            <UButton icon="solar:user-rounded-linear" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/skills">
            <UButton icon="solar:shield-up-linear" />
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/shop">
            <UButton icon="solar:shop-2-outline" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
button {
  background-color: var(--color-primary-500);
}
.router-link-active {
  button {
    background-color: var(--color-primary-300);
  }
}
</style>
