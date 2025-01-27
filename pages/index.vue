<template>
  <main class="flex-1 flex flex-col justify-center items-center relative">
    <section class="min-h-screen flex flex-col justify-center items-center relative">
      <AnimatedBackground />
      <h1 class="text-9xl font-bold">Hi</h1>
      <p class="text-bold md:text-3xl text-xl typing-animation text-center" v-html="displayText"></p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import { useTypewriter } from '@/composables/useTypewriter';

const texts = [
  "My name is Jose Ryu...",
  "<br />Welcome...",
  " to my portfolio...",
  "<br />I'm a software engineer...",
  "<br />This website is still on development...😢"
];

const { displayText, typeText } = useTypewriter({
  typingSpeed: 100,
  pauseBetweenLines: 750
});

onMounted(async () => {
  await typeText(texts);
});
</script>
