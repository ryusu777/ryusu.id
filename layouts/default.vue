<template>
  <div id="app">
    <header></header>
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

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Smooth scrolling for the whole page */
html {
  scroll-behavior: smooth;
}
</style>
