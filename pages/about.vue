<template>
  <main class="flex-1 flex flex-col items-center relative py-20 px-4 md:px-8 overflow-hidden">
    <div class="max-w-6xl w-full">
      <!-- Bento Grid Layout -->
      <div class="bento-grid grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min">
      <!-- Hero Section - Spans 2 columns -->
      <section class="bento-section md:col-span-2 group">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-400 bg-clip-text text-transparent mb-4">
          Software Developer & Technical Lead
        </h1>
        <p class="text-lg section-text leading-relaxed">
          Specialized in building sophisticated web-based systems with a focus on scalable architecture and engineering excellence.
        </p>
      </section>

      <!-- Profile Quick Info -->
      <section class="bento-section bg-primary/5 dark:bg-primary/5">
        <h2 class="text-2xl font-semibold mb-4">Current Role</h2>
        <p class="text-gray-600 dark:text-gray-300">Technical Lead focusing on architecture and coding standards</p>
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
            <h3 class="font-semibold mb-2">Cloud Architecture</h3>
            <p class="text-gray-600 dark:text-gray-300">Modern infrastructure</p>
          </div>
          <div class="bento-card">
            <h3 class="font-semibold mb-2">Technical Leadership</h3>
            <p class="text-gray-600 dark:text-gray-300">Team mentoring</p>
          </div>
        </div>
      </section>

      <!-- Notable Projects - Spans 2 columns -->
      <section class="bento-section md:col-span-2">
        <h2 class="section-title">Notable Projects</h2>
        <ul class="space-y-3 section-text">
          <li class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span>Enterprise systems for automotive industry</span>
          </li>
          <li class="flex items-center space-x-2">
            <span class="w-2 h-2 rounded-full bg-primary"></span>
            <span>Microservice-based web applications</span>
          </li>
        </ul>
      </section>
      
      <!-- Current Focus -->
      <section class="bento-section bg-gray-50 dark:bg-gray-800/50">
        <h2 class="section-title">Current Focus</h2>
        <p class="section-text">
          Elevating software architecture practices, establishing robust coding standards for scalable solutions, and exploring LLM capabilities and implementations.
        </p>
      </section>
    </div>
    </div>
  </main>
</template>

<style scoped>
.bento-grid {
  --animation-delay: 120ms;
}

.bento-section {
  @apply p-8 rounded-2xl border border-white/20 dark:border-white/10 
    bg-white/10 dark:bg-white/5 backdrop-blur-md 
    hover:shadow-lg hover:shadow-primary/5 
    hover:border-white/30 dark:hover:border-white/20 
    transition-all;
  animation: fade-in-up 800ms var(--animation-delay) backwards;
}

.bento-card {
  @apply p-4 rounded-xl 
    bg-white/10 dark:bg-white/5 
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

.grid > section:nth-child(2) { --animation-delay: 240ms; }
.grid > section:nth-child(3) { --animation-delay: 360ms; }
.grid > section:nth-child(4) { --animation-delay: 480ms; }
.grid > section:nth-child(5) { --animation-delay: 600ms; }

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
