<template>
  <svg
    id="math-wave"
    viewBox="0 0 1000 300"
    width="1000"
    :height="300 + height"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    class="wave-container"
  >
    <path :d="wavePath" :fill="color" class="wave" />
  </svg>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  interface Point {
    x: number;
    y: number;
  }

  const props = defineProps<{
    color: string;
    height: number;
    initialPhase: number;
  }>();

  const points = ref<Point[]>([]);
  const amplitude = ref(10);
  const frequency = ref(0.1);
  const phase = ref(props.initialPhase);
  let animationFrame: number | null = null;

  const generateWavePoints = (): Point[] => {
    const points: Point[] = [];
    const segments = 10; // Number of segments in the wave

    for (let i = 0; i <= segments; i++) {
      const x = (1000 / segments) * i;
      const y =
        props.height - // Move centerline up and invert the wave (was 150 +)
        amplitude.value * Math.sin(frequency.value * x + phase.value) - // Main wave (inverted)
        amplitude.value * 0.5 * Math.sin(frequency.value * 2 * x + phase.value); // Harmonic wave (inverted)

      points.push({ x, y });
    }

    return points;
  };

  const wavePath = computed(() => {
    // Generate points for the wave
    const points = generateWavePoints();

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

  // Animation function
  const animate = () => {
    phase.value += 0.01;
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
