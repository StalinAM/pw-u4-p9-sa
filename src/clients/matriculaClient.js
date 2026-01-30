import axios from 'axios'

const consultarTodos = async () => {
  const respuesta = axios
    .get('http://localhost:8081/matricula/api/v1.0/estudiantes')
    .then((response) => response.data)

  return respuesta
}

const consultarPorId = async (id) => {
  const respuesta = axios
    .get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
    .then((response) => response.data)
  return respuesta
}

const guardar = async (estudiante) => {
  console.log('estudiante en el client:', estudiante)

  const respuesta = axios
    .post('http://localhost:8081/matricula/api/v1.0/estudiantes', estudiante)
    .then((response) => response.data)
  return respuesta
}

const actualizar = async (id, estudiante) => {
  const respuesta = axios
    .put(
      `http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,
      estudiante
    )
    .then((response) => response.data)
  return respuesta
}

const actualizarParcial = async (id, estudiante) => {
  const respuesta = axios
    .patch(
      `http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`,
      estudiante
    )
    .then((response) => response.data)
  return respuesta
}

const eliminar = async (id) => {
  axios
    .delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`)
    .then((response) => response.data)
}

export async function consultarTodosFacade() {
  return await consultarTodos()
}

export async function consultarPorIdFacade(id) {
  return await consultarPorId(id)
}

export async function guardarFacade(estudiante) {
  return await guardar(estudiante)
}

export async function actualizarFacade(id, estudiante) {
  return await actualizar(id, estudiante)
}

export async function actualizarParcialFacade(id, estudiante) {
  return await actualizarParcial(id, estudiante)
}

export async function eliminarFacade(id) {
  await eliminar(id)
}
