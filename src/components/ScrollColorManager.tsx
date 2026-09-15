"use client";

import { useEffect } from 'react';

type Rgb = [number, number, number];

interface ColorScheme {
  bg: Rgb;
  fg: Rgb;
  grid: Rgb;
  accent: Rgb;
}

const DARK: ColorScheme = {
  bg: [10, 10, 10],
  fg: [237, 237, 237],
  grid: [51, 51, 51],
  accent: [230, 0, 0],
};

const RED: ColorScheme = {
  bg: [230, 0, 0],
  fg: [0, 0, 0],
  grid: [153, 0, 0],
  accent: [0, 0, 0],
};

// Smooth easing — slow start, slow end
function smoothstep(t: number): number {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
}

function mix(a: Rgb, b: Rgb, e: number): string {
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * e)}, ${Math.round(
    a[1] + (b[1] - a[1]) * e
  )}, ${Math.round(a[2] + (b[2] - a[2]) * e)})`;
}

// Updating these :root custom properties invalidates style for the whole
// document — measured at 15-27ms on this page, i.e. at or over the 60fps frame
// budget. The original code paid that on EVERY frame, forever. So: quantize the
// fade and write only when the step actually changes. Idle cost is then zero,
// and a full fade pass costs 64 restyles instead of one per frame. 64 steps is
// visually indistinguishable from a continuous ramp.
//
// Deriving all four colours from a single --t via color-mix() was measured as
// slower (the mix is re-evaluated at ~100 consuming elements), so the four
// pre-computed rgb() writes stay.
const STEPS = 64;

export default function ScrollColorManager() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let lastStep = -1;

    const update = () => {
      raf = requestAnimationFrame(update);

      const work = document.getElementById('work');
      if (!work) return;

      const vh = window.innerHeight;
      const rect = work.getBoundingClientRect();

      let t: number;
      // Off-screen either side — fully dark
      if (rect.top >= vh || rect.bottom <= 0) t = 0;
      // Entering: section top travels from viewport bottom to viewport top
      else if (rect.top > 0 && rect.top < vh) t = 1 - rect.top / vh;
      // Leaving: section bottom travels from viewport bottom to viewport top
      else if (rect.bottom > 0 && rect.bottom < vh) t = rect.bottom / vh;
      // Covering the viewport — fully red
      else t = 1;

      const step = Math.round(t * STEPS);
      if (step === lastStep) return;
      lastStep = step;

      const e = smoothstep(step / STEPS);
      root.style.setProperty('--dynamic-bg', mix(DARK.bg, RED.bg, e));
      root.style.setProperty('--dynamic-fg', mix(DARK.fg, RED.fg, e));
      root.style.setProperty('--dynamic-grid', mix(DARK.grid, RED.grid, e));
      root.style.setProperty('--dynamic-accent', mix(DARK.accent, RED.accent, e));
    };

    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, []);

  return null;
}
