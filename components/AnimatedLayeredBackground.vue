<script setup lang="ts">
  import MathWave from './MathWave.vue';
</script>

<template>
  <div>
    <MathWave color="#353057" :height="210" :initial-phase="5" />
    <MathWave color="#583d73" :height="170" :initial-phase="4" />
    <MathWave color="#84488c" :height="130" :initial-phase="3" />
    <MathWave color="#b34f9e" :height="90" :initial-phase="2" />
    <MathWave color="#ce52a2" :height="50" :initial-phase="1" />
  </div>
</template>
