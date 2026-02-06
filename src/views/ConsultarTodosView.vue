<template>
  <div>
    <h2>Consultar Todos</h2>
    <button @click="consultarTodos">Consultar</button>
    <div v-if="estudiantes.length" class="cards-container">
      <div v-for="est in estudiantes" :key="est.id" class="card">
        <h3>{{ est.nombre }} {{ est.apellido }}</h3>
        <p><strong>ID:</strong> {{ est.id }}</p>
        <p>
          <strong>Fecha de nacimiento:</strong>
          {{ formatFecha(est.fechaNacimiento) }}
        </p>
        <p><strong>Género:</strong> {{ est.genero }}</p>
        <p><strong>Provincia:</strong> {{ est.provincia }}</p>
      </div>
    </div>
    <div v-else class="mensaje">No hay datos para mostrar.</div>
  </div>
</template>
<script>
import { consultarTodosFacade } from '@/clients/matriculaClient'
export default {
  data() {
    return { estudiantes: [] }
  },
  methods: {
    async consultarTodos() {
      this.estudiantes = await consultarTodosFacade(
        localStorage.getItem('token') || null
      )
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
.cards-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}
.card {
  background: #232837;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  padding: 1rem 1.5rem;
  min-width: 220px;
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
</style>
