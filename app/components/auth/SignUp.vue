<script setup>
import { z } from "zod";
import { useAuth } from "@/composables/useAuth";
import { watch } from "vue";

const { signUp } = useAuth();

const props = defineProps({
  onSubmit: {
    type: Function,
    required: false,
  },
});

const schema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const state = reactive({
  email: "",
  password: "",
});

const submitError = ref(null);
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const resetSubmitError = () => {
  submitError.value = null;
};

watch(() => [state.email, state.password], resetSubmitError);

async function onSubmit() {
  try {
    submitError.value = null;
    const { error, data } = await signUp(state.email, state.password);
    if (error) {
      submitError.value = error.message || "An error occurred during signup";
    } else {
      props.onSubmit?.(data);
    }
  } catch (error) {
    submitError.value = error.message || "An error occurred during signup";
  }
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Password" name="password">
      <UInput
        v-model="state.password"
        :type="showPassword ? 'text' : 'password'"
        :ui="{ trailing: 'pe-1' }"
      >
        <template #trailing>
          <UButton
            color="neutral"
            variant="link"
            size="sm"
            icon="i-lucide-eye"
            aria-label="Show password"
            @click="togglePasswordVisibility"
          /> </template
      ></UInput>
    </UFormField>

    <div v-if="state.submitError" class="text-red-400 text-sm mb-4">
      {{ state.submitError }}
    </div>

    <UButton type="submit"> SignUp </UButton>
  </UForm>
</template>
