<template>
        <img class="mx-auto mt-4 mb-4 w-1/2" src="@/assets/logo.svg" alt="Tic Tac Toe Logo" />
    <section class="bg-black-ice text-white p-3 rounded-lg shadow-lg m-3">
        <h3 class="text-center text-1xl font-bold">MARCA DEL JUGADOR 01</h3>

        <div class="flex justify-center bg-black-blue rounded-lg p-2 m-4">

            <button class="bg-white-ice rounded-lg p-3 px-7 m-1 hover:bg-black-blue transition-all duration-500 ease-in-out" @click="setMark(true)">
                <img class="w-8 transition-all duration-500 ease-in-out transform hover:scale-110" src="@/assets/icon-x.svg" alt="X Icon" />
            </button>

            <button class="bg-inherit rounded-lg p-3 px-7 m-1 hover:bg-white-ice transition-all duration-500 ease-in-out" @click="setMark(false)">
                <img class="w-8 transition-all duration-500 ease-in-out transform hover:scale-110" src="@/assets/icon-o.svg" alt="O Icon" />
            </button>
        </div>

        <p class="text-center text-sm font-bold text-white-ice">NOTA: La X siempre empieza primero</p>
    </section>

    <section class="text-black w-full p-6">
        <button class="bg-yellow-dark rounded-lg text-xl font-bold w-full p-2 mb-2 hover:bg-yellow-light transition-all duration-500 ease-in-out" @click="setMode(true)">Vs. CPU</button>
        <button class="bg-blue-dark rounded-lg text-xl font-bold w-full p-2 mt-2 hover:bg-blue-light transition-all duration-500 ease-in-out" @click="setMode(false)">Vs. Jugador</button>
    </section>
</template>

<script setup> 

import { ref, toRefs } from 'vue'

defineProps(['modoJuego'])

const modoJuego = toRefs(ref('modoJuego'))


const setMark = (mark) => {
    modoJuego.mark = mark
}
const setMode = (mode) => {
    modoJuego.mode = mode
}
</script>
