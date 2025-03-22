<template>
  <div ref="canvasContainer" style="z-index: 0"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import p5 from 'p5'

const canvasContainer = ref<HTMLDivElement | null>(null)
let p5Instance: p5 | null = null

// Configuration for waves
const config = {
  graphPeriod: 360,
  numSegments: 11,
  noiseAplitude: 10,
}

let waveLength = window.innerWidth * 2;

interface WaveParams {
  y: number;
  amplitude: number;
  phase: number;
  color: string;
  reversed?: boolean; // Optional parameter to reverse the wave direction
}

// Define your p5.js sketch with TypeScript
const sketch = (p: p5) => {
  
  const generateWave = (params: WaveParams, frameCount: number) => {
    const controlPoints = [];
    const segmentLength = waveLength / config.numSegments;
    
    let angle = (frameCount * 1.5 + params.phase) % 360;
    
    // Calculate control points at segment boundaries
    for (let i = 0; i <= config.numSegments; i++) {
      const t = i * segmentLength;
      // Base sine wave
      // Reverse the wave by negating the sine value if reversed is true
      const baseY = p.sin((t + (params.reversed ? -angle : angle)) * (config.graphPeriod / 360)) * params.amplitude;
      
      // Add noise only at control points
      const noiseValue = p.noise(i * 0.3, frameCount * 0.01) * config.noiseAplitude - (config.noiseAplitude / 2);
      
      controlPoints.push({
        x: t / 2,
        y: params.y - (baseY + noiseValue)
      });
    }
    
    p.fill(params.color);
    
    // Draw curve using control points
    p.beginShape();
    
    // Add top-left corner of screen
    p.vertex(0, 0);
    // Add top-right corner of screen
    p.vertex(p.width, 0);
    
    // Add first control point (duplicate first point for curve beginning)
    p.curveVertex(controlPoints[controlPoints.length - 1].x, controlPoints[controlPoints.length - 1].y);
    
    // Add all control points in reverse order (right to left)
    for (let i = controlPoints.length - 1; i >= 0; i--) {
      p.curveVertex(controlPoints[i].x, controlPoints[i].y);
    }
    
    // Add first control point again (duplicate for curve ending)
    p.curveVertex(controlPoints[0].x, controlPoints[0].y);
    
    p.endShape(p.CLOSE);

  }

  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight)
    p.angleMode(p.DEGREES)
  }

  p.windowResized = () => {
    p.resizeCanvas(window.innerWidth, window.innerHeight)
    waveLength = window.innerWidth * 2;
  }
  
  p.draw = () => {
    p.noStroke()
    p.background('#141a29');
    
    // Example of multiple waves with different parameters
    generateWave({
      y: 320,
      amplitude: 15,
      phase: 0,
      color: '#353057',
      reversed: false
    }, p.frameCount);

    generateWave({
      y: 260,
      amplitude: 15,
      phase: 90,
      color: '#583d73',
      reversed: false
    }, p.frameCount);
        
    generateWave({
      y: 200,
      amplitude: 15,
      phase: 0,
      color: '#84488c',
      reversed: false
    }, p.frameCount);

    generateWave({
      y: 140,
      amplitude: 15,
      phase: 90,
      color: '#b34f9e',
      reversed: false
    }, p.frameCount);
    
    generateWave({
      y: 70,
      amplitude: 15,
      phase: 150,
      color: '#cd52a3',
      reversed: false
    }, p.frameCount);
    
  }
}

onMounted(() => {
  // Initialize p5 in instance mode
  if (canvasContainer.value) {
    p5Instance = new p5(sketch, canvasContainer.value)
  }
})

onUnmounted(() => {
  // Clean up when component is destroyed
  if (p5Instance) {
    p5Instance.remove()
  }
})
</script>

<style scoped>
/* Add any styling you need */
</style>
