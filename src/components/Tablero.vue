<template>
    <div class="tablero">
      <Cuadrado v-for="(cuadrado, index) in cuadrados" :key="index" :valor="cuadrado" @click="marcarCuadrado(index)" />
    </div>
  </template>
  
  <script>
  import Cuadrado from './Cuadrado.vue';
  
  export default {
    components: {
      Cuadrado
    },
    data() {
      return {
        cuadrados: Array(9).fill(null)
      };
    },
    methods: {
      marcarCuadrado(index) {
        const cuadrados = [...this.cuadrados];
        cuadrados[index] = 'X';
        this.cuadrados = cuadrados;
      }
    }
  };
  </script>
  
  <style scoped>
  .tablero {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;
    border: 1px solid black;
  }
  
  .tablero::after {
    content: '';
    flex: 0 0 33.33%;
    height: 0;
    padding-bottom: 33.33%;
  }
  
  .tablero .cuadrado {
    flex: 0 0 33.33%;
    height: 33.33%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }
  </style>