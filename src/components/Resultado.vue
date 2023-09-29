<template>
    <div class="resultado">
      <div v-if="resultado">
        <p>{{ resultado }}</p>
        <button @click="$emit('reiniciar-juego')">Play Again</button>
      </div>
      <div v-else>
        <p>Current winner: {{ winner }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      resultado: String,
      winner: String
    }
  };
  </script>
  
  <style scoped>
  .resultado {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>