<template>
  <header class="header">
    <nav class="flex items-center justify-between p-1.5">
      <!-- Navigation Links -->
      <div class="flex space-x-1 relative">
        <div class="absolute transition-all duration-300 ease-[cubic-bezier(.7, 0, .3, 1)] rounded-lg bg-primary/10 dark:bg-primary/10" :style="activeBackgroundStyle" />
        <NuxtLink to="/" class="nav-link">
          Home
        </NuxtLink>
        <NuxtLink to="/about" class="nav-link">
          About
        </NuxtLink>
        <NuxtLink to="/contact" class="nav-link">
          Contact
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const activeLink = ref<HTMLElement | null>(null);

const activeBackgroundStyle = computed(() => {
  if (!activeLink.value) return { width: '0px', height: '0px', transform: 'translateX(0)' };
  const { width, height, left } = activeLink.value.getBoundingClientRect();
  const parentLeft = activeLink.value.parentElement!.getBoundingClientRect().left;
  return {
    width: `${width}px`,
    height: `${height}px`,
    transform: `translateX(${left - parentLeft}px)`
  };
});

// Update active link reference when route changes
watch(() => route.path, async () => {
  await nextTick();
  activeLink.value = document.querySelector('.router-link-active');
});

onMounted(() => {
  activeLink.value = document.querySelector('.router-link-active');
});
</script>

<style scoped lang="scss">
.nav-link {
  @apply text-gray-600 dark:text-gray-300;
  @apply hover:text-primary dark:hover:text-primary;
  @apply transition-all;
  @apply md:tracking-[3.5px];
  @apply px-4 py-2 rounded-lg;
  @apply relative; // Add this

  &.router-link-active {
    @apply text-primary dark:text-primary;
  }
}

.header {
  @apply w-fit;
  @apply top-[40px] z-10;
  @apply backdrop-blur-md;
  @apply bg-white/30 dark:bg-gray-900/30;
  @apply backdrop-saturate-150;
  @apply fixed;
  @apply rounded-2xl;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  @apply flex justify-center;

  &::after {
    content: '';
    @apply absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r;
    @apply from-transparent from-5% via-gray-200/50 via-50% to-transparent to-95%;
    @apply dark:via-gray-800/75;
  }
}
</style>
