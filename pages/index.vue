<template>
  <main class="flex-1 flex flex-col justify-center items-center relative w-full h-full">
    <section class="min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
      <AnimatedBackground />
      <h1 class="text-9xl font-bold relative z-10">Hi</h1>
      <p class="text-bold md:text-3xl text-xl typing-animation text-center relative z-10">
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

<style scoped>
.radial-blur {
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.085) 0%,
    rgba(255, 255, 255, 0.075) 20%,
    rgba(255, 255, 255, 0.05) 40%,
    rgba(255, 255, 255, 0.0) 60%
  );
  backdrop-filter:blur(4px);
}
</style>
