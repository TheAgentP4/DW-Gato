<script setup>
import { ref } from 'vue'

const modoJuego = ref({mark: null, mode: null})

</script>

<template>
    <header>
      <img src="@/assets/logo.svg" alt="Tic Tac Toe Logo" />
      <img class="w-8 transition-all duration-500 ease-in-out transform hover:scale-110" src="@/assets/icon-restart.svg" alt="Restart Icon" />
      
      <button class="bg-white-ice rounded-lg p-3 px-7 m-1 hover:bg-black-blue transition-all duration-500 ease-in-out" @click="setMark(true)">
    </header>
</template>
```