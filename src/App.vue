<script setup>
import Inicio from '@/Inicio.vue'
import Game from '@/components/Game.vue'
import { ref } from 'vue'

const modoJuego = ref({mark: null, mode: null})

</script>

<template>
    <Inicio v-if="!modoJuego.mode" :modoJuego="modoJuego" />
    <Game v-if="modoJuego.mode && modoJuego.mark" :modoJuego="modoJuego" />
</template>
