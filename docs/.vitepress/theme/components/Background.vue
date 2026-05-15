<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId = 0;
let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

const CONNECT_DIST = 160;
const SPEED_FACTOR = 0.35;
const META_SYMBOLS = [
  '¬', '∧', '∨', '→', '↔',
  '∀', '∃', '⊢', '⊨', '⇔', '⇒', '⊥', '∴', '∵', '∎',
  '∅', '∈', '⊂', '∪', '∩', 'ℵ',
  'ℝ', 'ℂ', 'ℤ', 'ℕ', 'ℚ',
  '∫', '∂', '∇', '∑', '∏', '∞', 'Ω', 'π',
];

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  symbol: string;
};

let points: Point[] = [];

function initPoints(width: number, height: number) {
  const pointCount = width < 768 ? 10 : 40;
  points = Array.from({ length: pointCount }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * SPEED_FACTOR,
    vy: (Math.random() - 0.5) * SPEED_FACTOR,
    symbol: META_SYMBOLS[Math.floor(Math.random() * META_SYMBOLS.length)],
  }));
}

function getConvexHull(input: Point[]) {
  const sorted = input.slice().sort((a, b) => a.x - b.x || a.y - b.y);
  const cross = (o: Point, a: Point, b: Point) => (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
  const lower: Point[] = [];
  for (const point of sorted) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], point) <= 0) lower.pop();
    lower.push(point);
  }
  const upper: Point[] = [];
  for (let i = sorted.length - 1; i >= 0; i -= 1) {
    const point = sorted[i];
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], point) <= 0) upper.pop();
    upper.push(point);
  }
  upper.pop();
  lower.pop();
  return lower.concat(upper);
}

function draw() {
  if (!ctx || !canvasRef.value) return;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isDark = document.documentElement.classList.contains('dark');
  const symbolColor = isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';
  const lineColor = isDark ? 'rgba(120,220,255,0.25)' : 'rgba(0,50,100,0.03)';
  const triangleColor = isDark ? 'rgba(120,220,255,0.05)' : 'rgba(0,50,100,0.005)';
  const hullColor = isDark ? 'rgba(100, 220, 255, 0.05)' : 'rgba(0, 160, 200, 0.01)';

  ctx.clearRect(0, 0, width, height);
  ctx.font = '14px "Courier New", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (const point of points) {
    point.x += point.vx;
    point.y += point.vy;
    if (point.x < 0 || point.x > width) point.vx *= -1;
    if (point.y < 0 || point.y > height) point.vy *= -1;
    point.x = Math.max(0, Math.min(width, point.x));
    point.y = Math.max(0, Math.min(height, point.y));
  }

  const hull = getConvexHull(points);
  if (hull.length > 0) {
    ctx.beginPath();
    ctx.moveTo(hull[0].x, hull[0].y);
    for (let i = 1; i < hull.length; i += 1) ctx.lineTo(hull[i].x, hull[i].y);
    ctx.closePath();
    ctx.fillStyle = isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.01)';
    ctx.fill();
    ctx.strokeStyle = hullColor;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([8, 8]);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  for (let i = 0; i < points.length; i += 1) {
    const p1 = points[i];
    ctx.fillStyle = symbolColor;
    ctx.fillText(p1.symbol, p1.x, p1.y);
    for (let j = i + 1; j < points.length; j += 1) {
      const p2 = points[j];
      const distSq = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
      if (distSq < CONNECT_DIST * CONNECT_DIST) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = 0.8;
        ctx.stroke();
        for (let k = j + 1; k < points.length; k += 1) {
          const p3 = points[k];
          const d2 = (p1.x - p3.x) ** 2 + (p1.y - p3.y) ** 2;
          const d3 = (p2.x - p3.x) ** 2 + (p2.y - p3.y) ** 2;
          if (d2 < CONNECT_DIST ** 2 && d3 < CONNECT_DIST ** 2) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.closePath();
            ctx.fillStyle = triangleColor;
            ctx.fill();

            const cx = (p1.x + p2.x + p3.x) / 3;
            const cy = (p1.y + p2.y + p3.y) / 3;
            ctx.beginPath();
            ctx.moveTo((p1.x + cx) / 2, (p1.y + cy) / 2);
            ctx.lineTo((p2.x + cx) / 2, (p2.y + cy) / 2);
            ctx.lineTo((p3.x + cx) / 2, (p3.y + cy) / 2);
            ctx.closePath();
            ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }
  }

  animationFrameId = requestAnimationFrame(draw);
}

function handleResize() {
  if (!canvasRef.value) return;
  const dpr = window.devicePixelRatio || 1;
  canvasRef.value.width = window.innerWidth * dpr;
  canvasRef.value.height = window.innerHeight * dpr;
  canvasRef.value.style.width = `${window.innerWidth}px`;
  canvasRef.value.style.height = `${window.innerHeight}px`;
  ctx?.setTransform(dpr, 0, 0, dpr, 0, 0);
  initPoints(window.innerWidth, window.innerHeight);
}

function onResize() {
  if (resizeTimeout) clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 200);
}

onMounted(() => {
  if (!canvasRef.value) return;
  ctx = canvasRef.value.getContext('2d');
  handleResize();
  draw();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
  if (resizeTimeout) clearTimeout(resizeTimeout);
  cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <canvas ref="canvasRef" class="math-bg"></canvas>
</template>

<style scoped>
.math-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  opacity: 1;
}
</style>
