<template>
  <svg
    id="math-wave"
    viewBox="0 0 1000 300"
    width="1000"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    class="wave-container"
  >
    <path
      v-for="(wave, index) in wavePaths"
      :key="index"
      :d="wave"
      :fill="color[index]"
      class="wave"
    />
  </svg>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const props = defineProps<{
    color: string[];
    height: number[];
    initialPhase: number[];
  }>();

  const amplitude = ref(10);
  const frequency = ref(0.1);
  const phases = ref<number[]>(props.initialPhase);
  let animationFrame: number | null = null;

  // Pre-compute wave point generators for each height
  const waveGenerators = props.height.map((height) => {
    const segments = 10;
    const points: { x: number; y: (phase: number) => number }[] = [];

    for (let i = 0; i <= segments; i++) {
      const x = (1000 / segments) * i;
      points.push({
        x,
        y: (phase: number) =>
          height - // Move centerline up and invert the wave
          amplitude.value * Math.sin(frequency.value * x + phase) - // Main wave (inverted)
          amplitude.value * 0.5 * Math.sin(frequency.value * 2 * x + phase), // Harmonic wave (inverted)
      });
    }

    return points;
  });

  const wavePaths = computed(() => {
    return waveGenerators.map((generator, index) => {
      const currentPhase = phases.value[index];
      const points = generator.map(point => ({
        x: point.x,
        y: point.y(currentPhase),
      }));

      // Create the SVG path using bezier curves
      let path = `M 0 ${points[0].y}`;

      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];

        // Calculate control points for smooth curve
        const controlPoint1 = {
          x: current.x + (next.x - current.x) / 3,
          y: current.y,
        };
        const controlPoint2 = {
          x: current.x + ((next.x - current.x) * 2) / 3,
          y: next.y,
        };

        path += ` C ${controlPoint1.x} ${controlPoint1.y}, ${controlPoint2.x} ${controlPoint2.y}, ${next.x} ${next.y}`;
      }

      // Close the path at the top
      path += ` L ${1000} 0 L 0 0 Z`;

      return path;
    });
  });

  // Animation function
  const animate = () => {
    // Update all phases
    phases.value = phases.value.map((phase) => phase + 0.01);
    animationFrame = requestAnimationFrame(animate);
  };

  onMounted(() => {
    animate();
  });

  onUnmounted(() => {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);
    }
  });
</script>

<style scoped lang="scss">
  .wave-container {
    overflow: hidden;
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
  }
</style>
