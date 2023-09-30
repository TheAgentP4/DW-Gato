<script setup>
import { ref, toRefs } from 'vue'

const modoJuego = toRefs('modoJuego')

defineProps(['value'])


</script>
<template>
  <span class="w-1/2 justify-center items-center flex hover:bg-gray-200" @click="handleClick">
    <img v-if="value === false" class="w-1/2" src="@/assets/icon-o.svg" alt="O Icon" />
    <img v-else-if="value === true" class="w-1/2" src="@/assets/icon-x.svg" alt="X Icon" />

  </span>
  
</template>