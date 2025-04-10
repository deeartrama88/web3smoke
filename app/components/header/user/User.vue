<script setup lang="ts">
const toast = useToast();
import Login from "~/components/auth/Login.vue";
import SignUp from "~/components/auth/SignUp.vue";
import type { DropdownMenuItem } from "@nuxt/ui";
const { logout } = useAuth();

const user = useSupabaseUser();

const loginOpen = ref(false);
const signUpOpen = ref(false);

const toggleLoginModal = () => {
  loginOpen.value = !loginOpen.value;
};

const toggleSignUpModal = () => {
  signUpOpen.value = !signUpOpen.value;
};

const onLoginSuccess = () => {
  loginOpen.value = false;
  toast.add({
    title: "Login successful",
    description: "You have been logged in",
    color: "success",
  });
};

const onSignUpSuccess = () => {
  signUpOpen.value = false;
  toast.add({
    title: "SignUp successful",
    description: "You have been signed up",
  });
};

const loggedInItems = ref<DropdownMenuItem[]>([
  {
    label: "Logout",
    icon: "solar:logout-outline",
    onClick: logout,
  },
]);

const loggedOutItems = ref<DropdownMenuItem[]>([
  {
    label: "Login",
    icon: "solar:login-2-outline",
    onClick: toggleLoginModal,
  },
  {
    label: "SignUp",
    icon: "solar:user-plus-outline",
    onClick: toggleSignUpModal,
  },
]);
</script>

<template>
  <UDropdownMenu
    :items="user ? loggedInItems : loggedOutItems"
    :content="{
      align: 'start',
      side: 'bottom',
      sideOffset: 8,
    }"
    :ui="{
      content: 'w-48',
    }"
  >
    <UButton icon="solar:user-linear" color="neutral" variant="outline">
      <span class="truncate max-sm:w-20">{{
        user ? user.email : "Login"
      }}</span>
    </UButton>
  </UDropdownMenu>

  <UModal
    v-model:open="loginOpen"
    title="Login"
    description="Login to your account"
  >
    <template #body>
      <Login :onSubmit="onLoginSuccess" />
    </template>
  </UModal>

  <UModal
    v-model:open="signUpOpen"
    title="SignUp"
    description="Create an account"
  >
    <template #body>
      <SignUp :onSubmit="onSignUpSuccess" />
    </template>
  </UModal>
</template>
