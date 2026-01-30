<template>
  <div class="form-flex">
    <div class="form-container">
      <h2>Actualizar Parcial Estudiante</h2>
      <form @submit.prevent="actualizarParcial">
        <label>ID:</label>
        <input v-model="id" type="number" placeholder="ID" required />
        <label>Nombre:</label>
        <input v-model="nombre" placeholder="Nuevo Nombre (opcional)" />
        <label>Apellido:</label>
        <input v-model="apellido" placeholder="Nuevo Apellido (opcional)" />
        <label>Fecha de Nacimiento:</label>
        <input v-model="fechaNacimiento" type="date" />
        <label>Género:</label>
        <select v-model="genero">
          <option value="">Selecciona</option>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
          <option value="Otro">Otro</option>
        </select>
        <label>Provincia:</label>
        <input v-model="provincia" placeholder="Provincia (opcional)" />
        <button type="submit">Actualizar Parcial</button>
      </form>
      <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
    </div>
    <div v-if="respuesta" class="respuesta-card">
      <h3>Respuesta API</h3>
      <p><strong>ID:</strong> {{ respuesta.id }}</p>
      <p><strong>Nombre:</strong> {{ respuesta.nombre }}</p>
      <p><strong>Apellido:</strong> {{ respuesta.apellido }}</p>
      <p>
        <strong>Fecha de nacimiento:</strong> {{ respuesta.fechaNacimiento }}
      </p>
      <p><strong>Género:</strong> {{ respuesta.genero }}</p>
      <p><strong>Provincia:</strong> {{ respuesta.provincia }}</p>
    </div>
  </div>
</template>
<script>
import { actualizarParcialFacade } from '@/clients/matriculaClient'
export default {
  data() {
    return {
      id: '',
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      genero: '',
      provincia: '',
      mensaje: '',
      respuesta: null
    }
  },
  methods: {
    async actualizarParcial() {
      const datos = {}
      if (this.nombre) datos.nombre = this.nombre
      if (this.apellido) datos.apellido = this.apellido
      if (this.fechaNacimiento)
        datos.fechaNacimiento = this.formatFecha(this.fechaNacimiento)
      if (this.genero) datos.genero = this.genero
      if (this.provincia) datos.provincia = this.provincia
      const res = await actualizarParcialFacade(this.id, datos)
      this.mensaje = 'Estudiante actualizado parcialmente.'
      this.respuesta = res
    },
    formatFecha(fecha) {
      if (!fecha) return ''
      // fecha viene como 'YYYY-MM-DD' del input type date
      return fecha + 'T00:00:00'
    }
  }
}
</script>
<style scoped>
.form-flex {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
}
.form-container {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background: #232837;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
}
form {
  display: flex;
  flex-direction: column;
}
label {
  margin-top: 1rem;
  font-weight: bold;
  color: #42b983;
}
input,
select {
  padding: 0.5rem;
  margin-top: 0.3rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #2c2f3e;
  color: #ffffff;
}
button {
  margin-top: 1.5rem;
  padding: 0.7rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
.mensaje {
  margin-top: 1rem;
  color: #42b983;
  font-weight: bold;
}
.fecha-preview {
  margin-top: 1rem;
  color: #ffffff;
}
.respuesta-card {
  background: #232837;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  padding: 1.5rem 2rem;
  min-width: 220px;
  color: #f3f3f3;
}
.respuesta-card h3 {
  color: #42b983;
  margin-bottom: 1rem;
}
</style>
