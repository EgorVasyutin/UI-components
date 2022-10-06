<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h1 class="heading-2">Basic</h1>
  <div class="line line_block">
    <p>{{ selectedClub }}</p>
    <div v-for="club in footballClubs" :key="club.id">
      <radiobutton
        :value="club.name"
        :label="club.name"
        :id="club.id"
        name="club"
        v-model:checkedValue="selectedClub"
      />
    </div>
  </div>

  <h1 class="heading-2">Disabled</h1>
  <div class="line line_block">
    <radiobutton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="radiobuttonDisabled"
      name="radiobuttonDisabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Radiobutton from "@/components/Radiobutton.vue";

const footballClubs = ref([
  { name: "CSKA Moscow", id: "f1" },
  { name: "Spartak Moscow", id: "f2" },
  { name: "Real Madrid", id: "f3" },
  { name: "Milan", id: "f4" },
]);
const selectedClub = ref("none");

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<style scoped></style>
