<template>
    <div>
        <Tablero :cuadrados="cuadrados" @marcar-cuadrado="marcarCuadrado" />
        <Marcador :puntaje="puntaje" :turno="turno" />
        <Resultado v-if="resultado" :resultado="resultado" @reiniciar-juego="reiniciarJuego" />
        
    </div>
  </template>
  
  <script>

    import Tablero from './Tablero.vue';
    import Marcador from './Marcador.vue';
    import Resultado from './Resultado.vue';
    import { ref, defineProps } from 'vue'
  
  defineProps(['modoJuego'])
    const cuadrados = ref(Array(9).fill(null))
    const turno = ref('X')
    const puntaje = ref({ X: 0, O: 0 })
    const resultado = ref(null)

    const marcarCuadrado = (index) => {
        const cuadrados = [...cuadrados.value]
        if (resultado.value || cuadrados[index]) return
        cuadrados[index] = turno.value
        turno.value = turno.value === 'X' ? 'O' : 'X'
        cuadrados.value = cuadrados
        const ganador = calcularGanador(cuadrados.value)
        if (ganador) {
            resultado.value = `${ganador} wins!`
            puntaje.value[ganador]++
        } else if (!cuadrados.value.includes(null)) {
            resultado.value = 'Tie!'
        }
    }

    const reiniciarJuego = () => {
        cuadrados.value = Array(9).fill(null)
        resultado.value = null
    }

    const calcularGanador = (cuadrados) => {
        const lineasGanadoras = [
            [0, 1, 2],
            [0, 3, 6],
            [0, 4, 8],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ]
        for (let i = 0; i < lineasGanadoras.length; i++) {
            const [a, b, c] = lineasGanadoras[i]
            if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[a] === cuadrados[c]) {
                return cuadrados[a]
            }
        }
        return null
    }

  </script>