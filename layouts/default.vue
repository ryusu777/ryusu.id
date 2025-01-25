<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AnimatedBackground from '@/components/AnimatedBackground.vue'
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col justify-center items-center relative">
    <AnimatedBackground />
    <AppHeader></AppHeader>
    <slot />
    <footer></footer>
  </div>
</template>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  font-family: 'SFMono Nerd Font', Helvetica, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background: hsl(223, 34%, 12%);
}

body {
  line-height: 1.6;
  color: hsl(0, 0%, 80%);
}

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.page-enter-from {
  opacity: 0;
  transform: translateX(20px) scale(0.90);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
