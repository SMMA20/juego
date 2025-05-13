<template>
  <div class="container">
    <div v-if="!juegoIniciado">
      <h1>Piedra, Papel o Tijera</h1>
      <button class="inicio-btn" @click="iniciarJuego">Comenzar el juego</button>
    </div>
    
    <div v-else>
      <h1>Elige tu jugada</h1>
      <div class="opciones">
        <GameOption 
          name="Piedra"
          :isSelected="eleccionJugador === 'piedra'"
          @select="seleccionar('piedra')">
          <img src="https://th.bing.com/th/id/OIP.v2ekSu8jSUiZyv1o8FZAzQHaE0?rs=1&pid=ImgDetMain" alt="Piedra" width="100" height="100">
        </GameOption>
        <GameOption 
          name="Papel"
          :isSelected="eleccionJugador === 'papel'"
          @select="seleccionar('papel')">
          <img src="https://th.bing.com/th/id/OIP.Ar7FepN8qwisLWHodTeeeQHaHa?rs=1&pid=ImgDetMain" alt="Papel" width="100" height="100">
        </GameOption>
        <GameOption 
          name="Tijera"
          :isSelected="eleccionJugador === 'tijera'"
          @select="seleccionar('tijera')">
          <img src="https://th.bing.com/th/id/OIP.UMiYqaLE-8_lBkNULPgxYAHaHa?rs=1&pid=ImgDetMain" alt="Tijera" width="100" height="100">
        </GameOption>
      </div>
      <button class="jugar-btn" @click="jugar" :disabled="!eleccionJugador">Jugar</button>
      
      <div class="resultado" v-if="resultado">
        <p>Tu elegiste: <strong>{{ eleccionJugador }}</strong></p>
        <p>La máquina eligió: <strong>{{ eleccionMaquina }}</strong></p>
        <p v-if="ganador === 'jugador'" style="color: green">¡Ganaste!</p>
        <p v-else-if="ganador === 'maquina'" style="color: red">¡Perdiste!</p>
        <p v-else style="color: blue">¡Empate!</p>
      </div>
      
      <div class="marcador">
        <p>Jugador: {{ puntajeJugador }}</p>
        <p>Máquina: {{ puntajeMaquina }}</p>
      </div>
      
      <button class="jugar-btn" @click="reiniciarJuego" v-if="resultado" style="background-color: #f44336; margin-top: 20px;">Jugar de nuevo</button>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports';
import { useGame } from '~/composables/useGame';

// Definir metadatos de la página
definePageMeta({
  layout: 'default',
});

// SEO y metadatos de la página
useHead({
  title: 'Juego de Piedra, Papel o Tijera',
  meta: [
    { name: 'description', content: 'Diviértete jugando al clásico juego de Piedra, Papel o Tijera' }
  ]
});

// Utilizar el composable para la lógica del juego
const {
  juegoIniciado,
  eleccionJugador,
  eleccionMaquina,
  resultado,
  ganador,
  puntajeJugador,
  puntajeMaquina,
  iniciarJuego,
  seleccionar,
  jugar,
  reiniciarJuego
} = useGame();
</script>

<style scoped>
body {
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  margin: 0;
  padding: 20px;
  background-color: #f5f5f5;
}
.container {
  max-width: 600px;
  margin: 0 auto;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
}
h1 {
  color: #333;
}
.inicio-btn {
  padding: 15px 30px;
  font-size: 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 50px;
}
.opciones {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}

.jugar-btn {
  padding: 10px 20px;
  font-size: 18px;
  background-color: #2196F3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}
.jugar-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.resultado {
  margin-top: 20px;
  font-size: 18px;
}
.marcador {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  font-size: 20px;
  font-weight: bold;
}
</style>