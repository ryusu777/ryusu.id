<template>
  <header class="header">
    <nav class="flex items-center justify-between p-1">
      <!-- Navigation Links -->
      <div class="flex space-x-1 relative justify-between">
        <div
          class="absolute transition-all duration-300 ease-[cubic-bezier(.7, 0, .3, 1)] rounded-3xl bg-primary/10 dark:bg-primary/10"
          :style="activeBackgroundStyle"
        />
        <NuxtLink to="/" class="nav-link" style="margin-left: 0 !important"> Home </NuxtLink>
        <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
        <NuxtLink to="/contact" class="nav-link"> Contact </NuxtLink>
        <!-- <NuxtLink to="/scratch" class="nav-link"> Scratch </NuxtLink> -->
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
      transform: `translateX(${left - parentLeft}px)`,
    };
  });

  // Update active link reference when route changes
  watch(
    () => route.path,
    async () => {
      await nextTick();
      activeLink.value = document.querySelector('.router-link-active');
    }
  );

  onMounted(() => {
    activeLink.value = document.querySelector('.router-link-active');
  });
</script>

<style scoped lang="scss">
  .nav-link {
    @apply text-gray-600 dark:text-gray-300 font-bold tracking-wide text-lg;
    @apply hover:text-primary dark:hover:text-primary;
    @apply transition-all;
    @apply px-6 py-1.5 rounded-3xl;
    @apply relative; // Add this

    &.router-link-active {
      @apply text-primary dark:text-primary;
    }
  }

  .header {
    @apply w-fit;
    @apply top-[40px] z-10;
    @apply backdrop-blur-xl;
    @apply rounded-3xl;
    @apply bg-transparent;
    @apply fixed;
    @apply flex justify-center;
    box-shadow:
      inset 0 0 0 0.5px #656063,
      0 0 0 0.5px #787174;
  }
</style>
