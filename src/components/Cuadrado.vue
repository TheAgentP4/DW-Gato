<!-- Cuadrado.vue -->
<template>
  <span 
    class="flex items-center justify-center w-24 h-24 m-1 p-2 cursor-pointer rounded-xl bg-black-blue hover:bg-black-ice hover:opacity-80"
    @click="handleClick">
    <img v-if="value === 'O'" src="@/assets/icon-o.svg" alt="O Icon" />
    <img v-else-if="value === 'X'" src="@/assets/icon-x.svg" alt="X Icon" />
  </span>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits()

const { value } = defineProps(['value']);

const handleClick = () => {
  emit('click');
};


</script>
