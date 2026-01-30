<template>
  <div class="container">
    <button @click="consultarTodos">Consultar Todos</button>

    <button @click="consultarPorId">Consultar por ID</button>
    <button @click="guardar">Guardar</button>
    <button @click="actualizar">Actualizar</button>
    <button @click="actualizarParcial">Actualizar Parcial</button>
    <button @click="eliminar">Eliminar</button>
  </div>
</template>
<script>
import {
  consultarTodosFacade,
  consultarPorIdFacade,
  guardarFacade,
  actualizarFacade,
  actualizarParcialFacade,
  eliminarFacade
} from '@/clients/matriculaClient'
export default {
  data() {
    return {
      estudiantes: []
    }
  },
  methods: {
    async consultarTodos() {
      const estudiantes = await consultarTodosFacade()
      this.estudiantes = estudiantes
      console.log(estudiantes)
    },
    async consultarPorId() {
      const estudiante = await consultarPorIdFacade(1)
      console.log(estudiante)
    },
    async guardar() {
      const nuevoEstudiante = {
        nombre: 'Juan',
        apellido: 'Pérez'
      }
      await guardarFacade(nuevoEstudiante)
      console.log('Estudiante guardado')
    },
    async actualizar() {
      const estudianteActualizado = {
        nombre: 'Juan Carlos',
        apellido: 'Pérez Gómez',
        provincia: 'Madrid',
        genero: 'Masculino',
        fechaNacimiento: '2003-08-10T00:00:00'
      }
      await actualizarFacade(11, estudianteActualizado)
      console.log('Estudiante actualizado')
    },
    async actualizarParcial() {
      const datosParciales = {
        edad: 22
      }
      await actualizarParcialFacade(datosParciales, 10)
      console.log('Estudiante actualizado parcialmente')
    },
    async eliminar() {
      await eliminarFacade(10)
      console.log('Estudiante eliminado')
    }
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
