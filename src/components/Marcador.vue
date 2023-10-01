<template>
    <section class="flex flex-row justify-between items-center w-full h-auto items-center px-6">
        <span class="flex flex-col justify-center items-center bg-blue-dark rounded-lg p-1 m-1 w-1/3">
          <p class="text-black-blue font-bold text-xl">X {{ jugadorX }}</p>
          <p class="text-black-blue font-bold text-xl">{{ ganadosX }}</p>
        </span>
        <span class="flex flex-col justify-center items-center bg-white-ice rounded-lg p-1 m-1 w-1/3">
          <p class="text-black-blue font-bold text-xl">Ties</p>
          <p class="text-black-blue font-bold text-xl">{{ empates }}</p>
        </span>
        <span class="flex flex-col justify-center items-center bg-yellow-dark rounded-lg p-1 m-1 w-1/3">
          <p class="text-black-blue font-bold text-xl">O {{ jugadorO }}</p>
          <p class="text-black-blue font-bold text-xl">{{ ganadosO }}</p>
        </span>
    </section>
</template>

<script setup>

import { ref } from 'vue';

const jugadorX = ref(''); // o el valor inicial que desees
const ganadosX = ref(0); // o el valor inicial que desees
const empates = ref(0); // o el valor inicial que desees
const jugadorO = ref(''); // o el valor inicial que desees
const ganadosO = ref(0); // o el valor inicial que desees

</script>

