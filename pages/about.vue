<script setup lang="ts">
import Tooltip from '@/components/ui/Tooltip.vue';
import type PaperJsBackground from '~/components/PaperJsBackground.vue';
</script>

<template>
  <div class="w-full">
    <!-- <ClientOnly> -->
    <!--   <PaperJsBackground class="fixed inset-0 top-0" /> -->
    <!--   <template #fallback> -->
    <!--     <div>Loading...</div> -->
    <!--   </template> -->
    <!-- </ClientOnly> -->

    <main
      class="flex-1 flex flex-col justify-start items-center relative pt-32 px-4 pb-4 sm:pb-4 lg:pb-8 sm:px-6 lg:px-8"
    >
      <div class="max-w-6xl w-full">
        <!-- Bento Grid Layout -->
        <div class="bento-grid grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
          <!-- Hero Section - Spans 2 columns -->
          <section class="bento-section md:col-span-2 bg-primary/5 dark:bg-primary/5">
            <div class="relative">
              <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">
                Software Developer
              </h1>
              <p class="text-lg section-text leading-relaxed">
                Specialized in building sophisticated web-based systems with a focus on scalable
                architecture and engineering excellence.
              </p>
            </div>
          </section>

          <!-- Profile Quick Info -->
          <section class="bento-section bg-primary/5 dark:bg-primary/5">
            <div class="relative">
              <h2 class="text-2xl font-semibold mb-4">Current Focus</h2>
              <p class="text-gray-600 dark:text-gray-300">
                Software Developer focused on building scalable applications
              </p>
            </div>
          </section>

          <!-- Skills Grid - Spans 3 columns -->
          <section class="bento-section md:col-span-3">
            <div class="relative">
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
                  <h3 class="font-semibold mb-2">Problem Solving</h3>
                  <p class="text-gray-600 dark:text-gray-300">Complex challenges</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Current Focus -->
          <section class="bento-section bg-gray-50 dark:bg-gray-800/50">
            <div class="relative">
              <h2 class="section-title">Current Focus</h2>
              <p class="section-text">
                Building robust software architecture, implementing clean coding practices for
                scalable solutions, and exploring LLM capabilities and implementations.
              </p>
            </div>
          </section>

          <!-- Notable Projects - Spans 2 columns -->
          <section class="bento-section md:col-span-1">
            <div class="relative">
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
            </div>
          </section>

          <!-- Technology Stack -->
          <section class="bento-section md:col-span-1">
            <div class="relative">
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
                  <span class="skill-tag">Domain-driven Design</span>
                </Tooltip>
                <span class="skill-tag">Clean Architecture</span>
                <span class="skill-tag">Project Management</span>
                <span class="skill-tag">Code Review</span>
              </div>
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
    bg-gray-900/40
    hover:border-primary/30 dark:hover:border-primary/20 
    transition-all;
    animation: fade-in-up 1200ms var(--animation-delay) cubic-bezier(.22,.64,.47,1) forwards;
    opacity: 0;
    transform: translateY(-20px) translateX(20px);
  }

  .bento-card {
    @apply p-4 rounded-xl 
    bg-gray-900/50
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
    --animation-delay: 0ms;
  }
  .grid > section:nth-child(2) {
    --animation-delay: 100ms;
  }
  .grid > section:nth-child(3) {
    --animation-delay: 200ms;
  }
  .grid > section:nth-child(4) {
    --animation-delay: 300ms;
  }
  .grid > section:nth-child(5) {
    --animation-delay: 400ms;
  }
  .grid > section:nth-child(6) {
    --animation-delay: 500ms;
  }

  @keyframes fade-in-up {
    0% {
      transform: translateY(-20px) translateX(20px);
      opacity: 0;
    }

    30% {
      transform: translateY(0) translateX(-10px);
    }

    100% {
      transform: translateY(0) translateX(0);
      opacity: 1;
    }
  }

</style>
