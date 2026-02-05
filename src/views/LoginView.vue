<template>
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <label>Usuario:</label>
      <input v-model="usuario" placeholder="Usuario" required />
      <label>Contraseña:</label>
      <input
        v-model="password"
        type="password"
        placeholder="Contraseña"
        required
      />
      <button type="submit">Entrar</button>
    </form>
    <div v-if="mensaje" class="mensaje">{{ mensaje }}</div>
  </div>
</template>
<script>
import { obtenerTokenFacade } from '@/clients/authorizacionClient'
export default {
  data() {
    return {
      usuario: '',
      password: '',
      mensaje: ''
    }
  },
  methods: {
    async login() {
      try {
        // Aquí deberías adaptar el endpoint para recibir usuario y password
        // Por ahora, el facade está hardcodeado, pero puedes modificarlo para aceptar params
        const token = await obtenerTokenFacade(this.usuario, this.password)
        if (token && token.accessToken) {
          this.mensaje = 'Login exitoso.'
          // Aquí puedes guardar el token en App.vue o emitir un evento
        } else {
          this.mensaje = 'Credenciales incorrectas.'
        }
      } catch (error) {
        this.mensaje = 'Error al iniciar sesión.'
      }
    }
  }
}
</script>
<style scoped>
.login-container {
  max-width: 380px;
  margin: 4rem auto;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, #232837 80%, #2c2f3e 100%);
  border-radius: 12px;
  box-shadow:
    0 4px 16px rgba(66, 185, 131, 0.12),
    0 2px 8px rgba(0, 0, 0, 0.18);
  color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-container h2 {
  color: #42b983;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}
label {
  font-weight: bold;
  color: #42b983;
  margin-top: 0.7rem;
  margin-bottom: 0.2rem;
  font-size: 1.05rem;
}
input {
  padding: 0.6rem;
  border-radius: 6px;
  border: 1.5px solid #2e3448;
  background: #2c2f3e;
  color: #ffffff;
  font-size: 1.08rem;
  transition: border-color 0.2s;
}
input:focus {
  border-color: #42b983;
  outline: none;
}
button {
  margin-top: 1.2rem;
  padding: 0.8rem;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1.08rem;
  cursor: pointer;
  transition:
    background 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 2px 8px #42b98333;
}
button:hover {
  background: #369e6f;
}
.mensaje {
  margin-top: 1.5rem;
  color: #42b983;
  font-weight: bold;
  font-size: 1.08rem;
  text-align: center;
}
</style>
