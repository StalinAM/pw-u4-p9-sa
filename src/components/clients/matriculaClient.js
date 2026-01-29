import axios from 'axios'

const consumirAPI = async (pokemonId) => {
  const respuesta = axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((response) => response.data)
  return respuesta
}
