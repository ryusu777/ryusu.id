<template>
  <main class="flex-1 flex flex-col justify-center items-center relative">
    <h1 class="text-9xl font-bold">Hi</h1>
    <p class="text-bold md:text-3xl text-xl typing-animation" ref="typingText">
      <span class="typing-cursor">{{ displayText }}</span>
    </p>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

onMounted(() => {
  typeText();
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
