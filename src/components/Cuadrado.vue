<script setup>
import { ref } from 'vue'

const value = ref(null)


</script>
<template>
  <span class="flex items-center justify-center w-24 h-24 m-1 p-2 cursor-pointer rounded-xl bg-black-blue hover:bg-black-ice hover:opacity-80
  " @click="$emit('click')">
    
    <img v-if="value === false" src="@/assets/icon-o.svg" alt="O Icon" />
    <img v-else-if="value === true"  src="@/assets/icon-x.svg" alt="X Icon" />

  </span>
  
</template>