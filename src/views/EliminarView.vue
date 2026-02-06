<template>
  <div>
    <h2>Eliminar Estudiante</h2>
    <input v-model="id" type="number" placeholder="ID" />
    <button @click="eliminar">Eliminar</button>
    <div v-if="mensaje">{{ mensaje }}</div>
  </div>
</template>
<script>
import { eliminarFacade } from '@/clients/matriculaClient'
export default {
  data() {
    return { id: '', mensaje: '' }
  },
  methods: {
    async eliminar() {
      await eliminarFacade(this.id, localStorage.getItem('token') || null)
      this.mensaje = 'Estudiante eliminado.'
    }
  }
}
</script>

<style scoped>
button {
  margin-left: 1rem;
}
</style>
