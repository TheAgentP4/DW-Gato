<template>
    
        <NavBar :modoJuego="modoJuego"/>
        <Tablero :cuadrados="cuadrados" @click="marcarCuadrado" />
        <Marcador :puntaje="puntaje" :turno="turno" />
        
        <Resultado v-if="resultado != null" :ganador="resultado" />
  </template>
  
  <script setup>
    import NavBar from '@/components/NavBar.vue';
    import Tablero from '@/components/Tablero.vue';
    import Marcador from '@/components/Marcador.vue';
    import Resultado from '@/components/Resultado.vue';
    import { ref } from 'vue'
  
  defineProps(['modoJuego'])

    const modoJuego = ref('modoJuego')
    const cuadrados = ref(Array(9).fill(null))
    const puntaje = ref({x: 0, o: 0})
    const turno = ref(true) // true = X, false = O
    const resultado = ref(null) // null, 'X', 'O', '-'

    const marcarCuadrado = (indice) => {
        if (cuadrados[indice] == null && resultado == null) {
            cuadrados[indice] = turno ? 'X' : 'O'
            turno = !turno
        }
        resultado = calcularGanador()
    }

    const calcularGanador = () => {
        const lineasGanadoras = [
            [0, 1, 2], // Horizontal superior
            [3, 4, 5], // Horizontal media
            [6, 7, 8], // Horizontal inferior
            [0, 3, 6], // Vertical izquierda
            [1, 4, 7], // Vertical media
            [2, 5, 8], // Vertical derecha
            [0, 4, 8], // Diagonal izquierda
            [2, 4, 6] // Diagonal derecha
        ]
        for (let i = 0; i < lineasGanadoras.length; i++) {
            const [a, b, c] = lineasGanadoras[i]
            if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
                return cuadrados[a]
            }
        }
        if (cuadrados.every(cuadrado => cuadrado != null)) {
            return '-'
        }
        return null
    }

    const reiniciarJuego = () => {
        cuadrados = Array(9).fill(null)
        resultado = null
    }
    

  </script>