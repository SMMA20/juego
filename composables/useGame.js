import { ref } from 'vue';

export const useGame = () => {
  const juegoIniciado = ref(false);
  const eleccionJugador = ref(null);
  const eleccionMaquina = ref(null);
  const resultado = ref(false);
  const ganador = ref(null);
  const puntajeJugador = ref(0);
  const puntajeMaquina = ref(0);

  const iniciarJuego = () => {
    juegoIniciado.value = true;
  };

  const seleccionar = (opcion) => {
    eleccionJugador.value = opcion;
  };

  const jugar = () => {
    if (!eleccionJugador.value) return;
    
    const opciones = ['piedra', 'papel', 'tijera'];
    // Elección aleatoria de la máquina
    eleccionMaquina.value = opciones[Math.floor(Math.random() * 3)];
    
    // Determinar ganador
    if (eleccionJugador.value === eleccionMaquina.value) {
      ganador.value = 'empate';
    } else if (
      (eleccionJugador.value === 'piedra' && eleccionMaquina.value === 'tijera') ||
      (eleccionJugador.value === 'papel' && eleccionMaquina.value === 'piedra') ||
      (eleccionJugador.value === 'tijera' && eleccionMaquina.value === 'papel')
    ) {
      ganador.value = 'jugador';
      puntajeJugador.value++;
    } else {
      ganador.value = 'maquina';
      puntajeMaquina.value++;
    }
    
    resultado.value = true;
  };

  const reiniciarJuego = () => {
    eleccionJugador.value = null;
    eleccionMaquina.value = null;
    resultado.value = false;
    ganador.value = null;
  };

  return {
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
  };
};