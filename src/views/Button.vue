<template>
  <h1 class="heading-1">Button</h1>
  <h2 class="heading-2">Disabled</h2>
  <div class="line">
    <Button
      label="Primary"
      color="primary"
      :rounded="true"
      :disabled="true"
    ></Button>
    <Button
      label="Secondary"
      color="second"
      :rounded="true"
      :disabled="true"
    ></Button>
  </div>
  <h2 class="heading-2">Colors</h2>
  <div class="line">
    <Button label="Primary" color="primary"></Button>
    <Button label="Secondary" color="second"></Button>
    <Button label="Success" color="success"></Button>
    <Button label="Info" color="info"></Button>
    <Button label="Warning" color="warning"></Button>
    <Button label="Danger" color="danger"></Button>
  </div>
  <h2 class="heading-2">Rounded</h2>
  <div class="line">
    <Button label="Primary" color="primary" :rounded="true"></Button>
    <Button label="Secondary" color="second" :rounded="true"></Button>
    <Button label="Success" color="success" :rounded="true"></Button>
    <Button label="Info" color="info" :rounded="true"></Button>
    <Button label="Warning" color="warning" :rounded="true"></Button>
    <Button label="Danger" color="danger" :rounded="true"></Button>
  </div>
  <h2 class="heading-2">Outlined</h2>
  <div class="line">
    <Button label="Primary" color="primary" :outlined="true"></Button>
    <Button label="Secondary" color="second" :outlined="true"></Button>
    <Button label="Success" color="success" :outlined="true"></Button>
    <Button label="Info" color="info" :outlined="true"></Button>
    <Button label="Warning" color="warning" :outlined="true"></Button>
    <Button label="Danger" color="danger" :outlined="true"></Button>
  </div>
  <h2 class="heading-2">Icon</h2>
  <div class="line">
    <Button color="primary" icon="heart" :outlined="true"></Button>
    <Button color="second" icon="hand"></Button>
    <Button color="success" icon="address-book" :outlined="true"></Button>
    <Button color="info" icon="credit-card"></Button>
    <Button color="warning" icon="lemon" :outlined="true"></Button>
    <Button color="danger" icon="hourglass"></Button>
  </div>
  <h2 class="heading-2">Size</h2>
  <div class="line">
    <Button color="primary" label="Normal"></Button>
    <Button color="second" label="Large" size="large"></Button>
  </div>
  <h2 class="heading-2">Event</h2>
  <div class="line">
    <Button color="primary" label="Normal" @click="eventForButton"></Button>
    <Button color="second" label="Large" @click="eventForButton"></Button>
  </div>
</template>

<script setup>
import Button from "@/components/Button.vue";

const eventForButton = () => {
  alert("You click me");
};
</script>

<style scoped></style>
