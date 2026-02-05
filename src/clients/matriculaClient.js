import axios from 'axios'

const URL = 'http://localhost:8081/matricula/api/v1.0/estudiantes'

const consultarTodos = async (token) => {
  const respuesta = axios
    .get(URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.data)

  return respuesta
}

const consultarPorId = async (id, token) => {
  const respuesta = axios
    .get(`${URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.data)
  return respuesta
}

const guardar = async (estudiante, token) => {
  console.log('estudiante en el client:', estudiante)

  const respuesta = axios
    .post(URL, estudiante, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.data)
  return respuesta
}

const actualizar = async (id, estudiante, token) => {
  const respuesta = axios
    .put(`${URL}/${id}`, estudiante, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.data)
  return respuesta
}

const actualizarParcial = async (id, estudiante, token) => {
  const respuesta = axios
    .patch(`${URL}/${id}`, estudiante, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.data)
  return respuesta
}

const eliminar = async (id, token) => {
  axios
    .delete(`${URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => response.data)
  return
}

export async function consultarTodosFacade(token) {
  return await consultarTodos(token)
}

export async function consultarPorIdFacade(id, token) {
  return await consultarPorId(id, token)
}

export async function guardarFacade(estudiante, token) {
  return await guardar(estudiante, token)
}

export async function actualizarFacade(id, estudiante, token) {
  return await actualizar(id, estudiante, token)
}

export async function actualizarParcialFacade(id, estudiante, token) {
  return await actualizarParcial(id, estudiante, token)
}

export async function eliminarFacade(id, token) {
  await eliminar(id, token)
}
