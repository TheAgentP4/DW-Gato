<template>
    <section class="flex flex-row justify-between w-full h-auto items-center px-6">
        <span class="flex flex-col justify-center items-center bg-blue-dark rounded-lg p-1 m-1 w-1/3">
          <p class="text-black-blue font-bold text-md">X {{ jugadorX }}</p>
          <p class="text-black-blue font-bold text-xl">{{ ganadosX }}</p>
        </span>
        <span class="flex flex-col justify-center items-center bg-white-ice rounded-lg p-1 m-1 w-1/3">
          <p class="text-black-blue font-bold text-md">EMPATES</p>
          <p class="text-black-blue font-bold text-xl">{{ empates }}</p>
        </span>
        <span class="flex flex-col justify-center items-center bg-yellow-dark rounded-lg p-1 m-1 w-1/3">
          <p class="text-black-blue font-bold text-md">O {{ jugadorO }}</p>
          <p class="text-black-blue font-bold text-xl">{{ ganadosO }}</p>
        </span>
    </section>
</template>

<script setup>

import { computed, defineProps, ref } from 'vue';

const props = defineProps({
  puntaje: Object
});

// Definir jugadorX y jugadorO como refs con valores iniciales
const jugadorX = ref('Jugador');
const jugadorO = ref('Jugador');

// Usar computed para asegurar que los valores se actualicen automáticamente
const ganadosX = computed(() => props.puntaje.X);
const ganadosO = computed(() => props.puntaje.O);
const empates = computed(() => props.puntaje.empate);
</script>

