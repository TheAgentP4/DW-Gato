<template>
    <div>
        <Inicio />
      <Tablero :cuadrados="cuadrados" @marcar-cuadrado="marcarCuadrado" />
      <Marcador :puntaje="puntaje" :turno="turno" />
      <Resultado :resultado="resultado" @reiniciar-juego="reiniciarJuego" />
    </div>
  </template>
  
  <script>
  import Tablero from './Tablero.vue';
  import Marcador from './Marcador.vue';
  import Resultado from './Resultado.vue';
  
  export default {
    components: {
      Tablero,
      Marcador,
      Resultado
    },
    data() {
      return {
        cuadrados: Array(9).fill(null),
        puntaje: {
          X: 0,
          O: 0
        },
        turno: 'X',
        resultado: null,
        winner: null
      };
    },
    methods: {
      marcarCuadrado(index) {
        if (this.cuadrados[index] || this.winner) {
          return;
        }
        this.cuadrados.splice(index, 1, this.turno);
        if (this.hayGanador()) {
          this.winner = this.turno;
          this.puntaje[this.turno]++;
          this.resultado = `${this.turno} wins!`;
        } else if (this.cuadrados.every(cuadrado => cuadrado !== null)) {
          this.resultado = 'Tie game!';
        } else {
          this.turno = this.turno === 'X' ? 'O' : 'X';
        }
      },
      hayGanador() {
        const lineasGanadoras = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lineasGanadoras.length; i++) {
          const [a, b, c] = lineasGanadoras[i];
          if (
            this.cuadrados[a] &&
            this.cuadrados[a] === this.cuadrados[b] &&
            this.cuadrados[a] === this.cuadrados[c]
          ) {
            return true;
          }
        }
        return false;
      },
      reiniciarJuego() {
        this.cuadrados = Array(9).fill(null);
        this.resultado = null;
        this.winner = null;
        this.turno = 'X';
      }
    }
  };
  </script>