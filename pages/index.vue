<template>
  <main class="flex-1 flex flex-col justify-center items-center relative">
    <div class="absolute inset-0">
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-15 blur-[100px]"
      >
        <path 
          fill="#ff87d7" 
          :style="`d: path('${currentPath}')`"
          transform="translate(100 100) scale(1, 1)"
        />
      </svg>
    </div>

    <h1 class="text-9xl font-bold">Hi</h1>
    <p class="text-bold md:text-3xl text-xl typing-animation" ref="typingText">
      <span class="typing-cursor">{{ displayText }}</span>
    </p>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const blobPaths = [
  "M23.6,-41.2C31.9,-36.1,40.9,-32.4,53.7,-25.8C66.5,-19.2,83.1,-9.6,82.2,-0.5C81.3,8.5,62.8,17,49.3,22.6C35.9,28.1,27.5,30.7,20.2,36.9C12.8,43.2,6.4,53.3,-1.2,55.4C-8.8,57.4,-17.6,51.5,-28,47C-38.5,42.5,-50.6,39.4,-62.7,31.8C-74.8,24.1,-86.9,12.1,-88.2,-0.8C-89.6,-13.6,-80.1,-27.2,-70.7,-39.5C-61.3,-51.9,-52,-62.9,-40.3,-66C-28.5,-69,-14.2,-64,-3.3,-58.3C7.7,-52.6,15.3,-46.2,23.6,-41.2Z",
  "M34.6,-56.4C47.2,-52.7,61.3,-48.1,64.8,-38.6C68.3,-29.1,61.1,-14.5,59.4,-1C57.6,12.5,61.3,25,58,34.8C54.7,44.6,44.3,51.7,33.5,51.9C22.6,52.1,11.3,45.4,-1.5,48C-14.4,50.7,-28.8,62.7,-41,63.3C-53.2,63.9,-63.3,53.1,-69.2,40.7C-75,28.2,-76.7,14.1,-73,2.2C-69.3,-9.8,-60.1,-19.6,-55,-33.4C-49.9,-47.1,-48.7,-64.8,-40.2,-70.9C-31.7,-77,-15.9,-71.4,-2.4,-67.2C11,-63,22,-60.1,34.6,-56.4Z",
  "M32.6,-59.9C43.2,-50.4,53.3,-43.5,60.4,-34C67.6,-24.4,71.7,-12.2,75.1,1.9C78.4,16.1,80.9,32.1,71.4,37.6C61.9,43,40.4,37.9,26.5,36.4C12.6,35,6.3,37.1,-3.9,43.9C-14.1,50.7,-28.3,62.1,-39.6,62.1C-50.9,62,-59.4,50.6,-65.9,38.4C-72.4,26.2,-76.9,13.1,-79.1,-1.2C-81.2,-15.5,-80.9,-31.1,-71,-37.3C-61.1,-43.6,-41.4,-40.7,-28,-48.4C-14.5,-56.2,-7.3,-74.7,1.9,-78C11,-81.3,22.1,-69.3,32.6,-59.9Z",
  "M34.6,-65.5C42,-55.6,43.4,-40.7,52.9,-29C62.3,-17.2,80,-8.6,86.1,3.6C92.3,15.7,86.9,31.4,76.9,42.2C66.8,52.9,52,58.7,38.4,61.8C24.8,64.9,12.4,65.2,-1.6,68C-15.6,70.7,-31.1,75.8,-43.4,71.9C-55.6,68.1,-64.5,55.2,-72.1,41.7C-79.8,28.2,-86.2,14.1,-87.3,-0.7C-88.5,-15.4,-84.3,-30.8,-75.7,-42.8C-67.2,-54.7,-54.2,-63.1,-40.9,-69.6C-27.5,-76.1,-13.8,-80.7,-0.1,-80.5C13.6,-80.3,27.1,-75.4,34.6,-65.5Z"
]

const currentIndex = ref(0);
const currentPath = computed(() => blobPaths[currentIndex.value]);

onMounted(() => {
  typeText();
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % blobPaths.length;
  }, 3000);
});

const first = "Welcome...";
const second = " to my portfolio...";
const displayText = ref("");
let currentCharIndex = 0;

const typeText = () => {
  if (currentCharIndex < first.length) {
    displayText.value = first.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    if (currentCharIndex === first.length) {
      setTimeout(typeText, 1000); // Adjust typing speed here)
      return;
    };
    setTimeout(typeText, 150); // Adjust typing speed here
  } else if (currentCharIndex < first.length + second.length) {
    displayText.value = first + second.substring(0, currentCharIndex - first.length + 1);
    currentCharIndex++;
    setTimeout(typeText, 150); // Adjust typing speed here
  }
};
</script>

<style>
svg polyline,
svg line,
svg path {
  transition: 3s linear;
}
</style>
