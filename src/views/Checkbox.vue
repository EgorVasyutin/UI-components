<template>
  <h1 class="heading-1">Checkbox</h1>
  <h1 class="heading-2">Checkbox Active</h1>
  <div class="line">
    <Checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="checkboxActive"
      v-model:checked="checkboxActive"
    />
  </div>
  <h1 class="heading-2">Checkbox Disable</h1>
  <div class="line">
    <Checkbox
      label="Checkbox Disable"
      id="checkboxDisable"
      name="checkboxDisable"
      value="checkboxDisable"
      v-model:checked="checkboxDisabled"
      :disabled="checkboxDisabled"
    />
  </div>
  <h1 class="heading-2">Checkbox Group</h1>
  <div class="line line_block">
    <p>Selected Heroes: {{ selectedHeroes }}</p>
    <checkbox-group
      :options="listOfHeroes"
      name="heroes"
      v-model:value="selectedHeroes"
    />
  </div>
  <h1 class="heading-2">Switch</h1>
  <div class="line line_block">
    <p>Switch: {{ switchProfessional }}</p>
    <Checkbox
      label="Switch"
      id="switch"
      name="switch"
      value="switch"
      type="switch"
      v-model:checked="switchProfessional"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Checkbox from "@/components/checkbox/checkbox.vue";
import CheckboxGroup from "@/components/checkbox/CheckboxGroup.vue";
const checkboxActive = ref(true);
const checkboxDisabled = ref(true);

const listOfHeroes = ref([
  { name: "Spider Man", id: "h1" },
  { name: "Batman", id: "h2" },
  { name: "Tor", id: "h3" },
  { name: "Loki", id: "h4" },
]);

const selectedHeroes = ref(["h2", "h4"]);

const switchProfessional = ref(false);
</script>

<style scoped></style>
