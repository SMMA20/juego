<template>
  <div 
    class="opcion" 
    :class="{ seleccionada: isSelected }" 
    @click="$emit('select')">
    <slot></slot>
    <p>{{ name }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  isSelected: {
    type: Boolean,
    default: false
  }
});

defineEmits(['select']);
</script>

<style scoped>
.opcion {
  cursor: pointer;
  padding: 10px;
  border: 2px solid transparent;
  border-radius: 10px;
  transition: all 0.3s;
}
.opcion:hover {
  transform: scale(1.1);
}
.opcion.seleccionada {
  border-color: #4CAF50;
  background-color: rgba(76, 175, 80, 0.1);
}
</style>