<template>
  <main class="flex-1 flex flex-col justify-center items-center relative">
    <section class="min-h-screen flex flex-col justify-center items-center relative">
      <AnimatedBackground />
      <h1 class="text-9xl font-bold">Hi</h1>
      <p class="text-bold md:text-3xl text-xl typing-animation text-center">
        My name is Jose Ryu. <br />
        I'm an active technical lead and <br />
        software engineer in Indonesia.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import AnimatedBackground from '@/components/AnimatedBackground.vue';
</script>
