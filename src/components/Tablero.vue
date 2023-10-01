<!-- Tablero.vue -->
<template>
    <main class="flex flex-wrap justify-center items-center w-full h-full px-4">
      <Cuadrado 
        v-for="(cuadrado, index) in cuadrados" 
        :key="index" 
        :value="cuadrado" 
        @click="marcarCuadrado(index)" />
    </main>
  </template>
  
  <script setup>
import { defineProps, defineEmits } from 'vue'
import Cuadrado from '@/components/Cuadrado.vue'

const { cuadrados } = defineProps(['cuadrados'])
const emit = defineEmits()

const marcarCuadrado = (index) => {
  console.log('Evento de clic recibido en Tablero'); // Agrega esta línea
  emit('marcar-cuadrado', index);
}


  </script>
  