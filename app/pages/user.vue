<template>
  <div>
    <h1>User</h1>
    <p>{{ counter.count }}</p>
    <UButton icon="i-lucide-sun" @click="counter.increment()"
      >Increment</UButton
    >
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const counter = useCounterStore();
</script>
