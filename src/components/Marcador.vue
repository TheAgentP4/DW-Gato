<template>
  <div class="marcador">
    <div>
      <span>{{ turno }}'s Turn</span>
    </div>
    <div>
      <span>X: {{ puntaje.X }}</span>
      <span>O: {{ puntaje.O }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    puntaje: Object,
    turno: String
  }
};
</script>

<style scoped>
.marcador {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
</style>