<!-- Game.vue -->
<template>
  <div>
    <NavBar @reiniciar-juego="reiniciarJuego" :turno="turno" @inicio="inicio" />
    <Tablero :cuadrados="cuadrados" @marcar-cuadrado="marcarCuadrado" />
    <Marcador :puntaje="puntaje" :key="puntaje.X + puntaje.O" />
    <Resultado
      v-if="resultado !== null"
      :ganador="resultado"
      @reiniciar-juego="manejarSalir"
      @inicio="manejarReiniciar"
    />
  </div>
</template>

<script setup>
import { ref, watch, defineProps } from 'vue';
import NavBar from '@/components/NavBar.vue';
import Tablero from '@/components/Tablero.vue';
import Marcador from '@/components/Marcador.vue';
import Resultado from '@/components/Resultado.vue';

const props = defineProps({
  modoJuego: Object
});

const cuadrados = ref(Array(9).fill(null));
const puntaje = ref({ X: 0, O: 0 });
const turno = ref('X');
const resultado = ref(null);

watch(cuadrados, () => {
  const winner = calcularGanador();
  if (winner) {
    resultado.value = winner;
    if (winner !== '-') {
      puntaje.value[winner]++;
    }
  }
});

const marcarCuadrado = (index) => {
  if (!cuadrados.value[index]) {
    const nuevosCuadrados = [...cuadrados.value];
    nuevosCuadrados[index] = turno.value;
    cuadrados.value = nuevosCuadrados;
    turno.value = turno.value === 'X' ? 'O' : 'X';
    if (props.modoJuego.mode === 'cpu' && turno.value === 'O') {
      moverCPU();
    }
  }
};

const moverCPU = () => {
  let indiceAleatorio;
  do {
    indiceAleatorio = Math.floor(Math.random() * 9);
  } while (cuadrados.value[indiceAleatorio] !== null);
  marcarCuadrado(indiceAleatorio);
};

const calcularGanador = () => {
  const lineasGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < lineasGanadoras.length; i++) {
    const [a, b, c] = lineasGanadoras[i];
    if (cuadrados.value[a] && cuadrados.value[a] === cuadrados.value[b] && cuadrados.value[a] === cuadrados.value[c]) {
      return cuadrados.value[a];
    }
  }

  if (cuadrados.value.every(cuadrado => cuadrado !== null)) {
    return '-';
  }

  return null;
};

const reiniciarJuego = () => {
  cuadrados.value = Array(9).fill(null);
  resultado.value = null;
};

const manejarSalir = () => {
  resultado.value = null;
};

</script>
