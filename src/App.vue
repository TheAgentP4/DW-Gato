<script setup>
import Inicio from '@/Inicio.vue'
import Game from '@/components/Game.vue'
import { ref } from 'vue'

const modoJuego = ref({mark: null, mode: null})

</script>

<template>
    <Inicio v-if="modoJuego.mode == null || modoJuego.mark == null" :modoJuego="modoJuego">
    </Inicio>
    <Game v-else-if="modoJuego" :modoJuego="modoJuego" />    
</template>
