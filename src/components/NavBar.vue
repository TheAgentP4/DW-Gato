<script setup>
import { ref } from 'vue'

import { defineProps } from 'vue';
const props = defineProps(['modoJuego']);


</script>

<template>
    <header class="flex flex-row justify-between 
     w-full h-12 items-center px-6">
            <img src="@/assets/logo.svg" alt="logo" class="w-10 h-auto cursor-pointer transition duration-500 ease-in-out transform hover:relative hover:scale-110" @click="$emit('inicio')">
        
        <span class="flex flex-row justify-between items-center bg-black-blue opacity-80 rounded-lg p-2 w-1/3 h-auto" v-if="modoJuego.mark == null || modoJuego.mode == null">
            <img src="@/assets/icon-x.svg" alt="icon-x" class="w-6 h-auto" @click="$emit('modo-juego', {mark: true, mode: true})">
            <span class="text-white font-bold text-md">Turno</span>
        </span>
          <button class="bg-white-blue opacity-80 rounded-lg p-3 cursor-pointer hover:bg-white transition duration-500 ease-in-out" @click="$emit('reiniciar-juego')">
            <img src="@/assets/icon-restart.svg" alt="icon-restart" class="h-4 h-auto cursor-pointer hover:bg-white transition duration-500 ease-in-out transform hover:relative hover:rotate-180">
          </button>
    </header>
</template>
