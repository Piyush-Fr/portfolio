"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorMode, setCursorMode] = useState<"default" | "pointer" | "exp" | "tech">("default");
  const [isMounted, setIsMounted] = useState(false);

  // Exact mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth follower spring physics
  const springConfig = { damping: 25, stiffness: 300, mass: 0.4 };
  const followerX = useSpring(mouseX, springConfig);
  const followerY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);

    const updateCursorState = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        const type = cursorTarget.getAttribute("data-cursor");
        if (type === "exp" || type === "view") {
          setCursorMode("exp");
          setCursorText("[ EXP ]");
          return;
        } else if (type === "tech" || type === "explore") {
          setCursorMode("tech");
          setCursorText("[ TECH ]");
          return;
        }
      }

      const isClickable = target.closest("a, button, input, [role='button']");
      if (isClickable) {
        setCursorMode("pointer");
        setCursorText("");
      } else {
        setCursorMode("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", updateCursorState);

    return () => {
      window.removeEventListener("mousemove", updateCursorState);
    };
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  const isPill = cursorMode === "exp" || cursorMode === "tech";
  const isPointer = cursorMode === "pointer";

  const targetWidth = isPill ? 90 : isPointer ? 48 : 32;
  const targetHeight = isPill ? 34 : isPointer ? 48 : 32;

  return (
    <>
      {/* Precision Inner Dot (instant tracking) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-brand-red rounded-none pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          opacity: cursorMode !== "default" ? 0 : 1,
        }}
      />

      {/* Smooth Transparent Follower Box/Pill (Only Boundary & Text Change Color) */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: followerX,
          y: followerY,
        }}
      >
        <motion.div
          className={`flex items-center justify-center font-mono text-[11px] uppercase tracking-wider bg-transparent rounded-none transition-colors duration-200 ${
            isPill
              ? "border-2 border-brand-red text-brand-red font-bold"
              : isPointer
              ? "border-2 border-brand-red text-brand-red"
              : "border border-brand-red opacity-80"
          }`}
          animate={{
            width: targetWidth,
            height: targetHeight,
            x: -targetWidth / 2,
            y: -targetHeight / 2,
          }}
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 28,
          }}
        >
          {cursorText ? <span>{cursorText}</span> : null}
        </motion.div>
      </motion.div>
    </>
  );
}
