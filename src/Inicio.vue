<template>
    <div class="cuadrado" @click="marcarCuadrado">
      {{ valor }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      valor: String
    },
    methods: {
      marcarCuadrado() {
        this.$emit('click');
      }
    }
  };
  </script>
  
  <style scoped>
  .cuadrado {
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    cursor: pointer;
  }
  </style>