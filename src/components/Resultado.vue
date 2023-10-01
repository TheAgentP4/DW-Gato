<template>
  <span class="fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-70 justify-center items-center
  " v-if="ganador">
      <span class="flex flex-col justify-center items-center bg-black-ice p-3 shadow-lg h-1/4 w-full">
        <div class="flex flex-col justify-center items-center h-full w-[300px] m-2">
          <p class="text-2xl font-bold text-white-ice">{{ fraseJugador }}</p>
          <span class="flex flex-row justify-center items-center w-full h-full">
            <img src="@/assets/icon-x.svg" alt="icon-x" class="w-8 h-auto" v-if="ganador === true" >
            <img src="@/assets/icon-o.svg" alt="icon-o" class="w-8 h-auto" v-else-if="ganador === false" >
            <h2 class="text-2xl font-bold text-white-ice" v-if="ganador === true || ganador === false">Gana la Partida</h2>
            <h2 class="text-2xl font-bold text-white-ice" v-else-if="ganador === '-'">Empate</h2>
          </span>
          <span class="flex flex-row justify-center items-center w-full h-full">
            <button class="flex flex-col justify-center items-center bg-blue-dark rounded-lg p-1 m-1 w-1/3
            " @click="$emit('reiniciar-juego')">
              <img class="w-8 transition-all duration-500 ease-in-out transform hover:scale-110" src="@/assets/icon-restart.svg" alt="X Icon" />
            </button>
            <button class="flex flex-col justify-center items-center bg-blue-dark rounded-lg p-1 m-1 w-1/3" @click="$emit('inicio')">
              <img class="w-8 transition-all duration-500 ease-in-out transform hover:scale-110" src="@/assets/icon-o.svg" alt="X Icon" />
            </button>
          </span>
        </div>
      </span>
  </span>
</template>  
<script setup>
import { ref } from 'vue'

defineProps(['ganador'])

const fraseGanador = function(ganador, jugadorX) {
  if (ganador === 'X') {
    return 'Gana la Partida'
  } else if (ganador === 'O') {
    return 'Gana la Partida'
  } else if (ganador === '-') {
    return 'Empate'
  }
}
</script>