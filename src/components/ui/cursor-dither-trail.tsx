"use client";

// Fluid monochrome dither tail that follows the cursor.
//
// Tiny squares are painted along the pointer path onto a full-viewport canvas.
// Each square is kept or skipped via a 2x2 ordered-dither (Bayer) threshold, so
// the tail breaks up into a pixel stipple rather than a solid smear.
//
// The tail is painted at a *lagged* position rather than the raw pointer, so it
// trails the custom cursor instead of racing ahead of it, and dots are stored
// with a birth time and redrawn each frame — so they fade out on an exact
// schedule and vanish completely, which an alpha-decay wipe never quite does.

import { useEffect, useRef } from "react";

interface CursorDitherTrailProps {
  /** Monochrome colour of the dots. */
  trailColor?: string;
  /** Side length of one painted square, in CSS px (1-8 sensible). */
  dotSize?: number;
  /** Milliseconds for a dot to fade to nothing. */
  fadeDuration?: number;
  /**
   * How quickly the tail catches up to the pointer, per 60fps frame (0-1).
   * Lower = more lag. Tuned to sit behind the cursor's own 0.7s follower.
   */
  follow?: number;
  className?: string;
}

// 2x2 ordered-dither thresholds
const BAYER = [0, 2, 3, 1];
// Ring-buffer ceiling: fadeDuration/frame * MAX_STEPS is the real live count.
const MAX_DOTS = 1024;
// Cap dots spawned per frame so a fast flick can't flood the buffer.
const MAX_STEPS = 24;

export function CursorDitherTrail({
  trailColor = "#ffffff",
  dotSize = 4,
  fadeDuration = 600,
  follow = 0.14,
  className = "pointer-events-none fixed inset-0 z-[9997] hidden h-full w-full md:block",
}: CursorDitherTrailProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Pointer-driven effect — skip touch devices rather than run a canvas loop
    // nothing can drive.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      // Draw in CSS pixels; the backing store stays crisp on HiDPI screens.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const int = parseInt(trailColor.replace("#", ""), 16);
    const fill = `rgb(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255})`;

    // Live dots, oldest-first within [head - count, head).
    const xs = new Float32Array(MAX_DOTS);
    const ys = new Float32Array(MAX_DOTS);
    const born = new Float64Array(MAX_DOTS);
    let head = 0;
    let count = 0;

    const addDot = (x: number, y: number, now: number) => {
      const gx = Math.floor(x / dotSize);
      const gy = Math.floor(y / dotSize);
      // Ordered dither: skip a fraction of cells so the tail stipples apart.
      if (Math.random() < (BAYER[(gy & 1) * 2 + (gx & 1)] + 0.5) / 4) return;
      xs[head] = gx * dotSize;
      ys[head] = gy * dotSize;
      born[head] = now;
      head = (head + 1) % MAX_DOTS;
      if (count < MAX_DOTS) count++;
    };

    // Raw pointer target vs the lagged point the tail is actually drawn from.
    let targetX = 0;
    let targetY = 0;
    let tailX = 0;
    let tailY = 0;
    let havePointer = false;

    let raf = 0;
    let lastFrame = 0;

    const step = () => {
      const now = performance.now();
      const delta = Math.min(64, now - lastFrame);
      lastFrame = now;

      // Frame-rate independent ease toward the pointer.
      const k = 1 - Math.pow(1 - follow, delta / (1000 / 60));
      const prevX = tailX;
      const prevY = tailY;
      tailX += (targetX - tailX) * k;
      tailY += (targetY - tailY) * k;

      // Lay dots along the segment the tail just covered, so fast movement
      // leaves a continuous stipple instead of isolated dots.
      const dx = tailX - prevX;
      const dy = tailY - prevY;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.01) {
        const steps = Math.min(MAX_STEPS, Math.max(1, Math.ceil(dist / dotSize)));
        for (let i = 1; i <= steps; i++) {
          addDot(prevX + (dx * i) / steps, prevY + (dy * i) / steps, now);
        }
      }

      // Repaint every live dot at its exact age-based alpha. Expired dots are
      // dropped from the tail of the ring, so the canvas empties completely.
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = fill;
      let alive = 0;
      for (let i = 0; i < count; i++) {
        const idx = (head - count + i + MAX_DOTS) % MAX_DOTS;
        const age = now - born[idx];
        if (age >= fadeDuration) continue;
        ctx.globalAlpha = 1 - age / fadeDuration;
        ctx.fillRect(xs[idx], ys[idx], dotSize, dotSize);
        alive++;
      }
      ctx.globalAlpha = 1;
      // Survivors are always the newest `alive` entries, so trimming the count
      // drops exactly the expired ones; head stays put.
      count = alive;

      // Park once the tail has caught up and nothing is left to draw, so an
      // idle pointer costs nothing. onMove restarts it.
      if (alive === 0 && dist <= 0.01) {
        ctx.clearRect(0, 0, width, height);
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!havePointer) {
        // Don't sweep a tail in from the origin on the first movement.
        tailX = targetX;
        tailY = targetY;
        havePointer = true;
      }
      if (!raf) {
        lastFrame = performance.now();
        raf = requestAnimationFrame(step);
      }
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [trailColor, dotSize, fadeDuration, follow]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}

export default CursorDitherTrail;
