<template>
  <header class="header"> 
    <div class="container mx-auto px-4">
      <nav class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-900 dark:text-white">
            <img src="/svg/logo.svg" class="h-7 transition-all duration-100 ease-in-out" />
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink to="/" class="nav-link">
            Home
          </NuxtLink>
          <NuxtLink to="/about" class="nav-link">
            About
          </NuxtLink>
          <NuxtLink to="/projects" class="nav-link">
            Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="nav-link">
            Contact
          </NuxtLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.nav-link {
  @apply text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors tracking-[3.5px];
}

.header {
  @apply fixed w-full top-0 z-50;
  @apply backdrop-blur-sm;
  @apply bg-white/75 dark:bg-gray-900/75;
  @apply supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-gray-900/50;
  @apply relative;

  &::after {
    content: '';
    @apply absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r;
    @apply from-transparent from-5% via-gray-200/50 via-50% to-transparent to-95%;
    @apply dark:via-gray-800/75;
  }
}
</style>
