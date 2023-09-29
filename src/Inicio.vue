<template>
        <img class="mx-auto mt-4 mb-4" src="@/assets/logo.svg" alt="Tic Tac Toe Logo" />
    <section class="bg-black-ice text-white-ice p-4 rounded-lg shadow-lg m-4">
        <h3 class="text-center text-1xl font-bold">PICK PLAYER 1'S MARK</h3>
        <div class="flex justify-center bg-black rounded-lg p-4 m-4">
            <button class="bg-white-ice rounded-lg p-5 m-1" @click="setPlayer('X')">
                <img src="@/assets/icon-x.svg" alt="X Icon" />
            </button>
            <button class="bg-white-ice rounded-lg p-5 m-1" @click="setPlayer('O')">
                <img src="@/assets/icon-o.svg" alt="O Icon" />
            </button>
        </div>
        <p class="text-center text-sm">Remember: X always goes first!</p>
    </section>
    <section>
        <div class="flex justify-center">
            <button class="bg-yellow-dark text-black rounded-lg p-4 m-4 text-xl font-bold" @click="setMode(true)">Single Player</button>
            <button class="bg-blue-dark text-black rounded-lg p-4 m-4 text-xl font-bold" @click="setMode(false)">Multiplayer</button>
            <Game v-if="modoJuego.mode && modoJuego.player" :modoJuego="modoJuego" />
        </div>
    </section>

</template>


  
<script setup>
import { ref } from 'vue'

const modoJuego = ref({mode: null, player: null})

const setMode = (mode) => {
    modoJuego.mode = mode
}

const setPlayer = (player) => {
    modoJuego.player = player
}

const iniciarJuego = () => {
    if (modoJuego.mode && modoJuego.player) {
        console.log(modoJuego)
    }
}
</script>
