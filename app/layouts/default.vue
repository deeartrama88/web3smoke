<template>
  <div class="app-container">
    <Header />
    <main class="container mx-auto px-4 py-2">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/components/header/Header.vue";
import Footer from "~/components/footer/Footer.vue";
</script>
