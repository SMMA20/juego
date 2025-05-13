<template>
  <div class="app-container">
    <header>
      <h1 class="site-title">Juegos Clásicos en Nuxt</h1>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <p>&copy; {{ new Date().getFullYear() }} - Juego de Piedra, Papel o Tijera</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  text-align: center;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
}

main {
  flex: 1;
  padding: 2rem 0;
}

footer {
  background-color: #f1f1f1;
  padding: 1rem;
  text-align: center;
  color: #666;
}
</style>