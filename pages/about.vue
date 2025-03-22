<script setup lang="ts">
import Tooltip from '@/components/ui/Tooltip.vue';
import P5Background from '~/components/P5Background.vue';
</script>

<template>
  <div class="w-full">
    <ClientOnly>
      <P5Background class="fixed inset-0 top-0" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </ClientOnly>

    <main
      class="flex-1 flex flex-col justify-start items-center relative pt-32 px-4 pb-4 sm:pb-4 lg:pb-8 sm:px-6 lg:px-8"
    >
      <div class="max-w-6xl w-full">
        <!-- Bento Grid Layout -->
        <div class="bento-grid grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
          <!-- Hero Section - Spans 2 columns -->
          <section class="bento-section md:col-span-2 group relative overflow-hidden">
            <div
              class="absolute -left-10 -top-10 w-[200px] h-[200px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            ></div>
            <div
              class="absolute -right-10 -bottom-10 w-[200px] h-[200px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
            ></div>
            <div class="relative z-10">
              <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
                Software Developer & Technical Lead
              </h1>
              <p class="text-lg section-text leading-relaxed">
                Specialized in building sophisticated web-based systems with a focus on scalable
                architecture and engineering excellence.
              </p>
            </div>
          </section>

          <!-- Profile Quick Info -->
          <section class="bento-section bg-primary/5 dark:bg-primary/5">
            <h2 class="text-2xl font-semibold mb-4">Current Role</h2>
            <p class="text-gray-600 dark:text-gray-300">
              Technical Lead focusing on architecture and coding standards
            </p>
          </section>

          <!-- Skills Grid - Spans 3 columns -->
          <section class="bento-section md:col-span-3">
            <h2 class="text-2xl font-semibold mb-6">Technical Expertise</h2>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div class="bento-card">
                <h3 class="font-semibold mb-2">Full-Stack Development</h3>
                <p class="text-gray-600 dark:text-gray-300">Modern web applications</p>
              </div>
              <div class="bento-card">
                <h3 class="font-semibold mb-2">Distributed Systems</h3>
                <p class="text-gray-600 dark:text-gray-300">Scalable applications</p>
              </div>
              <div class="bento-card">
                <h3 class="font-semibold mb-2">Cloud Based Solution</h3>
                <p class="text-gray-600 dark:text-gray-300">Modern infrastructure</p>
              </div>
              <div class="bento-card">
                <h3 class="font-semibold mb-2">Technical Leadership</h3>
                <p class="text-gray-600 dark:text-gray-300">Team mentoring</p>
              </div>
            </div>
          </section>

          <!-- Current Focus -->
          <section class="bento-section bg-gray-50 dark:bg-gray-800/50">
            <h2 class="section-title">Current Focus</h2>
            <p class="section-text">
              Elevating software architecture practices, establishing robust coding standards for
              scalable solutions, and exploring LLM capabilities and implementations.
            </p>
          </section>

          <!-- Notable Projects - Spans 2 columns -->
          <section class="bento-section md:col-span-1">
            <h2 class="section-title">Notable Projects</h2>
            <ul class="space-y-3 section-text">
              <li class="flex items-start space-x-2">
                <span class="min-w-2 min-h-2 mt-2 rounded-full bg-primary"></span>
                <span>Enterprise systems for automotive industry</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="min-w-2 min-h-2 mt-2 rounded-full bg-primary"></span>
                <span>Microservice-based web applications</span>
              </li>
            </ul>
          </section>

          <!-- Technology Stack -->
          <section class="bento-section md:col-span-1">
            <h2 class="section-title">Skill Set</h2>
            <div class="flex flex-wrap gap-2">
              <span class="skill-tag">Back-end</span>
              <span class="skill-tag">Microservices</span>
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">DevOps</span>
              <span class="skill-tag">UI/UX</span>
              <span class="skill-tag">Front-end</span>
              <span class="skill-tag">Mobile</span>
              <span class="skill-tag">Cloud</span>
              <Tooltip text="Domain Driven Design">
                <span class="skill-tag">DDD</span>
              </Tooltip>
              <span class="skill-tag">Clean Architecture</span>
              <span class="skill-tag">Project Management</span>
              <span class="skill-tag">Mentoring</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
  .bento-section {
    box-shadow:
      inset 0 0 0 0.5px #656063,
      0 0 0 0.5px #787174;
    @apply p-[32px] rounded-[32px]
    backdrop-blur-md 
    bg-gray-900/40
    hover:border-primary/30 dark:hover:border-primary/20 
    transition-all;
    animation: fade-in-up 1200ms cubic-bezier(0.42, 0, 0.58, 1.4) var(--animation-delay) backwards;
  }

  .bento-card {
    @apply p-4 rounded-xl 
    bg-gray-900/50
    backdrop-blur-sm 
    border border-white/20 dark:border-white/10 
    hover:border-white/30 dark:hover:border-white/20 
    transition-all;
  }

  .section-title {
    @apply text-2xl font-semibold mb-4;
  }

  .section-text {
    @apply text-gray-600 dark:text-gray-300;
  }

  .skill-tag {
    @apply px-3 py-1 rounded-full text-sm bg-primary/10 text-primary cursor-default;
  }

  .grid > section:nth-child(1) {
    --animation-delay: 30ms;
  }
  .grid > section:nth-child(2) {
    --animation-delay: 100ms;
  }
  .grid > section:nth-child(3) {
    --animation-delay: 170ms;
  }
  .grid > section:nth-child(4) {
    --animation-delay: 240ms;
  }
  .grid > section:nth-child(5) {
    --animation-delay: 320ms;
  }
  .grid > section:nth-child(6) {
    --animation-delay: 390ms;
  }

  @keyframes fade-in-up {
    0% {
      opacity: 0;
      transform: translateY(-50px) scale(0.97);
    }

    60% {
      opacity: 1;
      transform: translateY(5px) scale(1.02);
    }

    80% {
      transform: translateY(-2px) scale(0.99);
    }

    90% {
      transform: translateY(1px) scale(1.01);
    }

    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
</style>
