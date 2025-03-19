<template>
  <header class="header">
    <nav class="flex items-center justify-between p-1">
      <!-- Navigation Links -->
      <div class="flex space-x-1 relative justify-between">
        <div
          class="absolute transition-all duration-300 ease-[cubic-bezier(.7, 0, .3, 1)] rounded-lg bg-primary/10 dark:bg-primary/10"
          :style="activeBackgroundStyle"
        />
        <NuxtLink to="/" class="nav-link" style="margin-left: 0 !important"> Home </NuxtLink>
        <NuxtLink to="/about" class="nav-link"> About </NuxtLink>
        <NuxtLink to="/contact" class="nav-link"> Contact </NuxtLink>
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
    @apply text-gray-600 dark:text-gray-300;
    @apply hover:text-primary dark:hover:text-primary;
    @apply transition-all;
    @apply tracking-[1.5px];
    @apply px-2.5 py-1.5 rounded-lg;
    @apply relative; // Add this

    &.router-link-active {
      @apply text-primary dark:text-primary;
    }
  }

  .header {
    @apply w-fit;
    @apply top-[40px] z-10;
    @apply backdrop-blur-md;
    @apply bg-gray-900/50;
    @apply backdrop-saturate-150;
    @apply fixed;
    @apply rounded-2xl;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    @apply flex justify-center;

    nav {
      box-shadow:
        inset 0 0 0 0.5px #656063,
        0 0 0 0.5px #787174;
      @apply rounded-lg;
      background: hsl(223, 34%, 100%, 0.05);

      /* acrylic */
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(10px); /* Safari */

      /* Exclusion blend */
      background-blend-mode: exclusion;
    }
  }
</style>
