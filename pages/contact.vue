<template>
  <main class="flex flex justify-center items-center relative">
    <section class="min-h-screen flex flex-col justify-center flex-1 max-w-4xl mx-auto px-4">
      <h1 class="text-4xl font-bold mb-8 text-center">Let's get in touch</h1>

      <div class="grid gap-6 md:grid-cols-2">
        <a
          href="https://linkedin.com/in/jose-ryu-leonesta"
          target="_blank"
          class="social-link group"
        >
          <Icon name="line-md:linkedin" class="social-icon group-hover:text-primary" />
          <h2 class="social-text">Jose Ryu Leonesta</h2>
        </a>

        <a href="https://instagram.com/ryusu777" target="_blank" class="social-link group">
          <Icon name="line-md:instagram" class="social-icon group-hover:text-primary" />
          <h2 class="social-text">ryusu777</h2>
        </a>

        <a target="_blank" class="social-link group cursor-not-allowed">
          <Icon name="line-md:twitter-x-alt" class="social-icon" />
          <h2 class="social-text">Coming soon</h2>
        </a>

        <a href="mailto:jose.ryu.leonesta@gmail.com" class="social-link group">
          <Icon name="line-md:email" class="social-icon group-hover:text-primary" />
          <h2 class="social-text">jose.ryu.leonesta@gmail.com</h2>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
  .social-link {
    @apply flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow space-x-4;
  }

  .social-icon {
    @apply w-6 h-6;
  }

  .social-text {
    @apply font-semibold text-lg transition-colors;
  }
</style>
