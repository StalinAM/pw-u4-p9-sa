import axios from 'axios'

const URL = ' http://localhost:8082/auth/token'

const obtenerToken = async ({ usuario, password }) => {
  console.log(usuario, password)
  const respuesta = axios
    .get(`${URL}?user=${usuario}&password=${password}`)
    .then((response) => response.data)

  return respuesta
}
export async function obtenerTokenFacade({ usuario, password }) {
  return await obtenerToken({ usuario, password })
}
