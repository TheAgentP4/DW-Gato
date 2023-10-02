<!-- Game.vue -->
<template>
    <div>
      <NavBar @reiniciar-juego="reiniciarJuego" :turno="turno" @inicio="inicio" />

      <Tablero :cuadrados="cuadrados" @marcar-cuadrado="marcarCuadrado" />
      <Marcador :puntaje="puntaje" :turno="turno" />
      <Resultado v-if="resultado !== null" :ganador="resultado" />
    </div>
  </template>
  
  <script setup>
import { defineProps, ref, watch, computed, toRefs } from 'vue'
const props = defineProps(['modoJuego'])

  import NavBar from '@/components/NavBar.vue'
  import Tablero from '@/components/Tablero.vue'
  import Marcador from '@/components/Marcador.vue'
  import Resultado from '@/components/Resultado.vue'
  
  const modoJuego = toRefs(props.modoJuego)
  const cuadrados = ref(Array(9).fill(null))
  const puntaje = ref({ X: 0, O: 0 })
  const turno = ref('X')
  const resultado = ref(null)
  
  watch(cuadrados, () => {
  const winner = calcularGanador();
  console.log('Ganador:', winner); 
  if (winner) {
    resultado.value = winner;
    if (winner !== '-') {
      puntaje.value[winner]++;
    }
  }
});


  
const marcarCuadrado = (index) => {
  console.log('Evento marcar-cuadrado recibido en Game'); 
  if (!cuadrados.value[index]) {
    cuadrados.value[index] = turno.value;
    turno.value = turno.value === 'X' ? 'O' : 'X';
  }
};


  
  const calcularGanador = () => {
    console.log('Verificando ganador...'); // Agrega esta línea
  const lineasGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticales
    [0, 4, 8], [2, 4, 6]              // diagonales
  ];

  for (let i = 0; i < lineasGanadoras.length; i++) {
    const [a, b, c] = lineasGanadoras[i];
    if (cuadrados.value[a] && cuadrados.value[a] === cuadrados.value[b] && cuadrados.value[a] === cuadrados.value[c]) {
      return cuadrados.value[a]; // retorna 'X' o 'O'
    }
  }

  if (cuadrados.value.every(cuadrado => cuadrado !== null)) {
    return '-'; // retorna '-' para empate
  }

  return null; // retorna null si el juego aún no ha terminado
};

  
  const reiniciarJuego = () => {
    cuadrados.value = Array(9).fill(null)
    resultado.value = null
  }

  const inicio = () => {
    puntaje.value = { X: 0, O: 0 }
    turno.value = props.modoJuego ? 'X' : 'O'
    reiniciarJuego()
  }
  </script>
  