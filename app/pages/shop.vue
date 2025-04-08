<template>
  <div>
    <h1>Shop</h1>
    <p>{{ counter.count }}</p>
    <UButton icon="i-lucide-sun" @click="counter.increment()"
      >Increment</UButton
    >
    <div>
      <p>{{ count }}</p>
      <UButton icon="i-lucide-sun" @click="increment()">Increment</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useCounter } from "@/composables/useCounter";

const counter = useCounterStore();
const { count, increment } = useCounter();
</script>
