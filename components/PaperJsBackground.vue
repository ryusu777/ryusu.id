<template>
  <canvas ref="canvas" style="z-index: 0" resize></canvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import paper from 'paper'

const canvas = ref<HTMLCanvasElement | null>(null)
let frameCount = 0
let animationFrame: number | null = null

// Configuration for waves
const config = {
  graphPeriod: 360,
  numSegments: 12,
  noiseAplitude: 30,
  fps: 30, // Limit FPS for better performance
}

let waveLength = window.innerWidth * 2
let lastFrameTime = 0
let paths: paper.Path[] = []

interface WaveParams {
  y: number
  amplitude: number
  phase: number
  color: string
  reversed?: boolean
}

// Simplified Perlin noise implementation for Paper.js
const noise = (function() {
  const permutation = new Array(256).fill(0).map((_, i) => i)
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[permutation[i], permutation[j]] = [permutation[j], permutation[i]]
  }
  const p = [...permutation, ...permutation]

  function fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }

  function lerp(t: number, a: number, b: number): number {
    return a + t * (b - a)
  }

  function grad(hash: number, x: number): number {
    return (hash & 1) === 0 ? x : -x
  }

  return function(x: number, y: number): number {
    const X = Math.floor(x) & 255
    const Y = Math.floor(y) & 255
    x -= Math.floor(x)
    y -= Math.floor(y)
    const u = fade(x)
    const v = fade(y)
    const a = p[X] + Y
    const b = p[X + 1] + Y
    return lerp(v,
      lerp(u, grad(p[a], x), grad(p[b], x - 1)),
      lerp(u, grad(p[a + 1], x), grad(p[b + 1], x - 1))
    )
  }
})()

function generateWave(params: WaveParams, frame: number) {
  const path = new paper.Path()
  const viewWidth = paper.view.size.width
  const extraWidth = viewWidth * 0.05 // Add 5% extra width on each side
  const segmentLength = waveLength / config.numSegments
  const angle = (frame * 5 + params.phase) % 360

  // Pre-calculate constants outside the loop
  const angleMultiplier = (config.graphPeriod / 360) / 180 * Math.PI
  const noiseFrameScale = frame * 0.01
  const noiseOffset = config.noiseAplitude / 2

  // Start with top edge points
  path.add(new paper.Point(-extraWidth, 0))
  path.add(new paper.Point(viewWidth + extraWidth, 0))

  // Calculate bottom wave points with extra width
  for (let i = config.numSegments + 2; i >= -2; i--) {
    const t = i * segmentLength
    const x = (t / 2) - extraWidth
    const baseY = params.amplitude * Math.sin((t + (params.reversed ? -angle : angle)) * angleMultiplier)
    const noiseValue = noise(i * 0.3, noiseFrameScale) * config.noiseAplitude - noiseOffset
    
    // Add extra control points at the edges with consistent y values
    if (i === -2 || i === config.numSegments + 2) {
      path.add(new paper.Point(x, params.y))
    } else {
      path.add(new paper.Point(x, params.y - (baseY + noiseValue)))
    }
  }

  
  path.closed = true
  path.smooth({ type: 'continuous' })
  path.fillColor = new paper.Color(params.color)
  
  return path
}

// Define waves outside the animation loop
const waves = [
  { y: 320, amplitude: 15, phase: 0, color: '#353057' },
  { y: 250, amplitude: 15, phase: 90, color: '#583d73' },
  { y: 180, amplitude: 15, phase: 0, color: '#84488c' },
  { y: 110, amplitude: 15, phase: 90, color: '#b34f9e' },
  { y: 40, amplitude: 15, phase: 150, color: '#cd52a3' }
]

function animate(currentTime: number) {
  // FPS limiting
  if (currentTime - lastFrameTime < 1000 / config.fps) {
    animationFrame = requestAnimationFrame(animate)
    return
  }
  lastFrameTime = currentTime

  paper.project.clear()
  
  // Background (cache if not exists)
  if (!paths[0]) {
    paths[0] = new paper.Path.Rectangle({
      point: [0, 0],
      size: paper.view.size,
      fillColor: '#141a29'
    })
  } else {
    paths[0].bounds.size = paper.view.size
  }

  // Generate or update waves
  waves.forEach((params, index) => {
    paths[index + 1] = generateWave(params, frameCount)
  })

  
  frameCount++
  animationFrame = requestAnimationFrame(animate)
}

// Debounced resize handler
let resizeTimeout: number | null = null
function handleResize() {
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout)
  }
  
  resizeTimeout = window.setTimeout(() => {
    if (canvas.value) {
      const { width, height } = canvas.value.parentElement?.getBoundingClientRect() || { width: window.innerWidth, height: window.innerHeight }
      paper.view.viewSize = new paper.Size(width, height)
      waveLength = width * 2
      paths = [] // Clear cached paths on resize
    }
  }, 150) // Debounce for 150ms
}

onMounted(() => {
  if (canvas.value) {
    // Setup Paper.js
    paper.setup(canvas.value)
    
    // Start animation
    animate(0)
    
    // Handle resize
    window.addEventListener('resize', handleResize)
    handleResize()
  }
})

onUnmounted(() => {
  if (animationFrame !== null) {
    cancelAnimationFrame(animationFrame)
  }
  if (resizeTimeout) {
    window.clearTimeout(resizeTimeout)
  }
  window.removeEventListener('resize', handleResize)
  paper.project.clear()
  paths = [] // Clear path cache
})
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100vh;
  display: block;
}
</style>
