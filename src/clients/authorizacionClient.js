import axios from 'axios'

const URL = ' http://localhost:8082/auth/token?user=svacurio&password=1234'

const obtenerToken = async () => {
  const respuesta = axios.get(URL).then((response) => response.data)

  return respuesta
}
export async function obtenerTokenFacade() {
  return await obtenerToken()
}
