<template>
  <div id="app">
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/"> Inicio</router-link>
        </li>
        <li>
          <router-link to="/consultar-todos"> Consultar Todos</router-link>
        </li>
        <li>
          <router-link to="/consultar-por-id"> Consultar por ID</router-link>
        </li>
        <li>
          <router-link to="/guardar"> Guardar</router-link>
        </li>
        <li>
          <router-link to="/actualizar"> Actualizar</router-link>
        </li>
        <li>
          <router-link to="/actualizar-parcial">
            Actualizar Parcial</router-link
          >
        </li>
        <li>
          <router-link to="/eliminar"> Eliminar</router-link>
        </li>
      </ul>
    </nav>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// No se importa HomeView aquí, se usa router-view para todo
</script>

<style>
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.navbar {
  background: #232837;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.22);
  position: sticky;
  top: 0;
  z-index: 10;
  border: 1.5px solid #2e3448;
  padding: 1rem;
}
.navbar ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0.4rem 0;
  gap: 1rem;
}
.navbar li {
  transition: transform 0.15s;
}
.navbar li:hover {
  transform: translateY(-2px) scale(1.06);
}
.navbar a {
  color: #42b983;
  font-weight: 600;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.08rem;
  letter-spacing: 0.01em;
  transition:
    background 0.2s,
    color 0.2s,
    box-shadow 0.2s;
  box-shadow: 0 0 0 rgba(66, 185, 131, 0);
}
.navbar a.router-link-exact-active,
.navbar a:hover {
  background: #42b983;
  color: #fff;
  box-shadow: 0 2px 8px #42b98333;
}
.icon {
  font-size: 1.2em;
  vertical-align: middle;
}
@media (max-width: 700px) {
  .navbar ul {
    flex-direction: column;
    gap: 0.5rem;
    align-items: stretch;
  }
  .navbar {
    border-radius: 0 0 12px 12px;
  }
}
.form-container {
  max-width: 500px !important;
}
form {
  min-width: 340px;
}
</style>
