<template>
  <div class="app-container">
    <header>
      <h1 class="site-title">JUEGA AHORA</h1>
    </header>
    <main>
      <slot/>
    </main>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #1b6496;
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

</style>
