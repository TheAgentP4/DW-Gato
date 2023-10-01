<template>
  <span class="fixed flex top-0 left-0 w-full h-full bg-black bg-opacity-70 justify-center items-center" v-if="ganador !== null">
    <span class="flex flex-col justify-center items-center bg-black-ice p-3 shadow-lg h-1/4 w-full">
      <div class="flex flex-col justify-center items-center h-full w-[300px] m-2">
        <p class="text-2xl font-bold text-white-ice">{{ fraseGanador }}</p>
        <span class="flex flex-row justify-center items-center w-full h-full">
          <img src="@/assets/icon-x.svg" alt="icon-x" class="w-8 h-auto" v-if="ganador === 'X'">
          <img src="@/assets/icon-o.svg" alt="icon-o" class="w-8 h-auto" v-else-if="ganador === 'O'">
          <h2 class="text-2xl font-bold text-white-ice" v-if="ganador === 'X' || ganador === 'O'">Gana la Partida</h2>
          <h2 class="text-2xl font-bold text-white-ice" v-else-if="ganador === '-'">Empate</h2>
        </span>
        <span class="flex flex-row justify-center items-center w-full h-full">
          <button class="flex flex-col justify-center items-center bg-blue-dark rounded-lg p-1 m-1 w-1/3" @click="$emit('reiniciar-juego')">
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
import { defineProps, computed, watch } from 'vue';


const { ganador } = defineProps(['ganador'])
watch(() => ganador.value, (newVal) => {
  console.log('Nuevo valor de ganador en Resultado:', newVal); // Agrega esta línea
});

const fraseGanador = computed(() => {
  if (ganador.value === 'X' || ganador.value === 'O') {
    return `Jugador ${ganador.value} Gana la Partida`
  } else if (ganador.value === '-') {
    return 'Empate'
  }
})
</script>
