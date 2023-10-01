<script setup>
import { ref } from 'vue'
import Cuadrado from '@/components/Cuadrado.vue'

const cuadrados = ref(Array(9).fill(null))

const marcarCuadrado = (index) => {
    const cuadrados = [...cuadrados.value]
    if (resultado.value || cuadrados[index]) return
    cuadrados[index] = turno.value
    turno.value = turno.value === true ? false : true
    cuadrados.value = cuadrados
    const ganador = calcularGanador(cuadrados.value)
    if (ganador) {
        resultado.value = `${ganador} wins!`
        puntaje.value[ganador]++
    } else if (!cuadrados.value.includes(null)) {
        resultado.value = 'Tie!'
    }
}
</script>

<template>
    <main class="flex flex-wrap justify-center items-center w-full h-full px-4">
        <Cuadrado v-for="(cuadrado, index) in cuadrados" :key="index" :value="cuadrado" @click="marcarCuadrado(index)" />
    </main>
</template>