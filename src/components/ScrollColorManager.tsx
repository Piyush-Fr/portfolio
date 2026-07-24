"use client";

import { useEffect, useRef } from 'react';

function hexToRgb(hex: string): [number, number, number] {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.substring(0, 2), 16),
    parseInt(hex.substring(2, 4), 16),
    parseInt(hex.substring(4, 6), 16),
  ];
}

function interpolateColor(color1: string, color2: string, factor: number): string {
  const [r1, g1, b1] = hexToRgb(color1);
  const [r2, g2, b2] = hexToRgb(color2);
  const r = Math.round(r1 + (r2 - r1) * factor);
  const g = Math.round(g1 + (g2 - g1) * factor);
  const b = Math.round(b1 + (b2 - b1) * factor);
  return `rgb(${r}, ${g}, ${b})`;
}

// Smooth easing — slow start, slow end
function smoothstep(t: number): number {
  t = Math.max(0, Math.min(1, t));
  return t * t * (3 - 2 * t);
}

interface ColorScheme {
  bg: string;
  fg: string;
  grid: string;
  accent: string;
}

const DARK: ColorScheme = {
  bg: '#0a0a0a',
  fg: '#ededed',
  grid: '#333333',
  accent: '#e60000',
};

const RED: ColorScheme = {
  bg: '#e60000',
  fg: '#000000',
  grid: '#990000',
  accent: '#000000',
};

function lerpScheme(a: ColorScheme, b: ColorScheme, t: number): ColorScheme {
  const ease = smoothstep(t);
  return {
    bg: interpolateColor(a.bg, b.bg, ease),
    fg: interpolateColor(a.fg, b.fg, ease),
    grid: interpolateColor(a.grid, b.grid, ease),
    accent: interpolateColor(a.accent, b.accent, ease),
  };
}

export default function ScrollColorManager() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      const workSection = document.getElementById('work');

      if (!workSection) {
        rafRef.current = requestAnimationFrame(update);
        return;
      }

      const viewportH = window.innerHeight;
      const rect = workSection.getBoundingClientRect();

      // How far the work section is through the viewport:
      //   - When the TOP of the section hits the BOTTOM of the viewport → fade starts (t=0)
      //   - When the TOP of the section reaches the TOP of the viewport → fully red (t=1)
      //   - When the BOTTOM of the section hits the BOTTOM of the viewport → fade out starts
      //   - When the BOTTOM of the section reaches the TOP of the viewport → fully dark again

      let colors: ColorScheme;

      // Section is completely below the viewport — dark
      if (rect.top >= viewportH) {
        colors = DARK;
      }
      // Section is completely above the viewport — dark
      else if (rect.bottom <= 0) {
        colors = DARK;
      }
      // Entering: section top is between viewport bottom and viewport top
      else if (rect.top > 0 && rect.top < viewportH) {
        // t goes from 0 (section top at viewport bottom) to 1 (section top at viewport top)
        const t = 1 - (rect.top / viewportH);
        colors = lerpScheme(DARK, RED, t);
      }
      // Leaving: section bottom is between viewport bottom and viewport top
      else if (rect.bottom > 0 && rect.bottom < viewportH) {
        // t goes from 1 (section bottom at viewport bottom) to 0 (section bottom at viewport top)
        const t = rect.bottom / viewportH;
        colors = lerpScheme(DARK, RED, t);
      }
      // Fully covering the viewport — fully red
      else {
        colors = RED;
      }

      const root = document.documentElement;
      root.style.setProperty('--dynamic-bg', colors.bg);
      root.style.setProperty('--dynamic-fg', colors.fg);
      root.style.setProperty('--dynamic-grid', colors.grid);
      root.style.setProperty('--dynamic-accent', colors.accent);

      rafRef.current = requestAnimationFrame(update);
    };

    rafRef.current = requestAnimationFrame(update);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return null;
}
