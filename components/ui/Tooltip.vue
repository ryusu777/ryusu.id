<template>
  <div class="relative inline-block">
    <div @mouseenter="showTooltip = true" @mouseleave="showTooltip = false">
      <slot></slot>
    </div>
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-show="showTooltip"
        class="absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-md whitespace-nowrap"
        :class="[
          position === 'top' && '-top-8 left-1/2 transform -translate-x-1/2',
          position === 'bottom' && 'top-full mt-1 left-1/2 transform -translate-x-1/2',
          position === 'left' && 'right-full top-1/2 transform -translate-y-1/2 mr-1',
          position === 'right' && 'left-full top-1/2 transform -translate-y-1/2 ml-1'
        ]"
      >
        {{ text }}
        <div
          v-if="position === 'top'"
          class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(defineProps<{
  text: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}>(), {
  position: 'top'
});

const showTooltip = ref(false);
</script>
