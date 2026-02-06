<template>
  <div>
    <h2>Consultar por ID</h2>
    <input v-model="id" type="number" placeholder="ID" />
    <button @click="consultarPorId">Consultar</button>
    <div v-if="estudiante" class="card">
      <h3>{{ estudiante.nombre }} {{ estudiante.apellido }}</h3>
      <p><strong>ID:</strong> {{ estudiante.id }}</p>
      <p>
        <strong>Fecha de nacimiento:</strong>
        {{ formatFecha(estudiante.fechaNacimiento) }}
      </p>
      <p><strong>Género:</strong> {{ estudiante.genero }}</p>
      <p><strong>Provincia:</strong> {{ estudiante.provincia }}</p>
    </div>
    <div v-else class="mensaje">No hay datos para mostrar.</div>
  </div>
</template>
<script>
import { consultarPorIdFacade } from '@/clients/matriculaClient'
export default {
  data() {
    return { id: '', estudiante: null }
  },
  methods: {
    async consultarPorId() {
      const token = localStorage.getItem('token') || null
      console.log('Token in ConsultarPorIdView:', token)
      this.estudiante = await consultarPorIdFacade(this.id, token)
    },
    formatFecha(fecha) {
      if (!fecha) return ''
      const d = new Date(fecha)
      if (isNaN(d)) return fecha
      const pad = (n) => n.toString().padStart(2, '0')
      return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
    }
  }
}
</script>
<style scoped>
.card {
  background: #232837;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  padding: 1rem 1.5rem;
  min-width: 220px;
  margin-top: 2rem;
  color: #f3f3f3;
}
.card h3 {
  margin-bottom: 0.5rem;
  color: #42b983;
}
.mensaje {
  margin-top: 2rem;
  color: #888;
}
button {
  margin-left: 1rem;
}
</style>
