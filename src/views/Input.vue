<template>
  <h1 class="heading-1">Inputs</h1>

  <form @submit.prevent="submitForm">
    <Input
      label="Your name"
      name="name"
      placeholder="Input your name"
      v-model:value="v.nameField.$model"
      :error="v.nameField.$errors"
    />
    <Input
      label="Your email"
      name="email"
      placeholder="Input your email"
      v-model:value="v.emailField.$model"
      :error="v.emailField.$errors"
    />
    <Input
      label="Your password"
      name="password"
      placeholder="Input your password"
      type="password"
      v-model:value="v.passwordField.$model"
      :error="v.passwordField.$errors"
    />
    <Input
      label="Your confirm password"
      name="confirm-password"
      placeholder="Input your confirm password"
      type="password"
      v-model:value="v.confirmPasswordField.$model"
      :error="v.confirmPasswordField.$errors"
    />

    <Button color="primary" label="Submit"></Button>
  </form>
</template>

<script setup>
import { ref, computed } from "vue";
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";

import useVuelidate from "@vuelidate/core";
import {
  minLength,
  helpers,
  email,
  sameAs,
  required,
} from "@vuelidate/validators";

const nameField = ref("");
const emailField = ref("");
const passwordField = ref("");
const confirmPasswordField = ref("");

const rules = computed(() => ({
  nameField: {
    required: helpers.withMessage("Это поле обязательно", required),
    minLength: helpers.withMessage(
      "Минимальная длина: 3 символа",
      minLength(3)
    ),
  },
  emailField: {
    required: helpers.withMessage("Это поле обязательно", required),
    email: helpers.withMessage("Вы ввели не верный email", email),
  },
  passwordField: {
    required: helpers.withMessage("Это поле обязательно", required),
    minLength: helpers.withMessage(
      "Минимальная длина: 6 символа",
      minLength(6)
    ),
  },
  confirmPasswordField: {
    required: helpers.withMessage("Это поле обязательно", required),
    sameAsPassword: helpers.withMessage(
      "Пароли не совпадают",
      sameAs(passwordField.value)
    ),
  },
}));

const v = useVuelidate(rules, {
  nameField,
  emailField,
  passwordField,
  confirmPasswordField,
});

const submitForm = () => {
  v.value.$touch();
  if (v.value.$error) return;
  alert("Form submitted");
};
</script>
