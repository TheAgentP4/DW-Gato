<script setup>
import { ref } from 'vue'

const modoJuego = ref({mark: null, mode: null})

let turno = 'O' // 'X' o 'O' temporal

</script>

<template>
    <header class="flex flex-row justify-between 
     w-full h-12 items-center px-6">
            <img src="@/assets/logo.svg" alt="logo" class="w-auto h-5 cursor-pointer transition duration-500 ease-in-out transform hover:relative hover:scale-110" @click="$emit('inicio')">
        
        <span class="flex flex-row justify-between items-center bg-black-blue opacity-80 rounded-lg p-2 w-1/3 h-auto" v-if="modoJuego.mark == null || modoJuego.mode == null">
            <img v-if="turno == 'X'" class="w-5 h-auto" 
            src="@/assets/icon-x.svg" @click="$emit('modo-juego', {mark: true, mode: true})">

            <img v-else-if="turno == 'O'" src="@/assets/icon-o.svg" alt="icon-o" class="w-5 h-auto" @click="$emit('modo-juego', {mark: false, mode: true})">
            <span class="text-white font-bold text-sm">TURNO</span>
        </span>
          <button class="bg-white-blue opacity-80 rounded-lg p-3 cursor-pointer hover:bg-white transition duration-500 ease-in-out" @click="$emit('reiniciar-juego')">
            <img src="@/assets/icon-restart.svg" alt="icon-restart" class="h-4 h-auto cursor-pointer hover:bg-white transition duration-500 ease-in-out transform hover:relative hover:rotate-180">
          </button>
    </header>
</template>
