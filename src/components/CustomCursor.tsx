"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorMode, setCursorMode] = useState<"default" | "pointer" | "exp" | "tech">("default");
  const [isMounted, setIsMounted] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const followerPillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useGSAP(() => {
    if (!isMounted) return;
    
    // Default state is the solid dot alone, so the outline box starts hidden.
    gsap.set(followerPillRef.current, { x: -16, y: -16, width: 32, height: 32, opacity: 0 });
    gsap.set(dotRef.current, { x: -100, y: -100 });
    gsap.set(followerRef.current, { x: -100, y: -100 });

    // The dot tracks the pointer with no easing. quickTo builds a tween, and a
    // zero-duration tween finishes before it ever renders — so the dot stayed
    // parked off-screen. quickSetter writes the value straight through.
    const setDotX = gsap.quickSetter(dotRef.current, "x", "px") as (v: number) => void;
    const setDotY = gsap.quickSetter(dotRef.current, "y", "px") as (v: number) => void;
    
    // Smooth spring-like follower
    const setFollowerX = gsap.quickTo(followerRef.current, "x", { duration: 0.7, ease: "expo.out" });
    const setFollowerY = gsap.quickTo(followerRef.current, "y", { duration: 0.7, ease: "expo.out" });

    const updateCursorState = (e: MouseEvent) => {
      setDotX(e.clientX);
      setDotY(e.clientY);
      setFollowerX(e.clientX);
      setFollowerY(e.clientY);

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
  }, [isMounted]);

  // Animate shape changes based on mode
  useGSAP(() => {
    if (!isMounted) return;

    const isPill = cursorMode === "exp" || cursorMode === "tech";
    const isPointer = cursorMode === "pointer";

    const targetWidth = isPill ? 90 : isPointer ? 56 : 32;
    const targetHeight = isPill ? 34 : isPointer ? 56 : 32;

    gsap.to(followerPillRef.current, {
      width: targetWidth,
      height: targetHeight,
      x: -targetWidth / 2,
      y: -targetHeight / 2,
      // Default state is the small solid dot alone — the outline box only
      // appears on hover targets. EXP/TECH pills are unaffected.
      opacity: cursorMode === "default" ? 0 : 1,
      duration: 0.6,
      ease: "expo.out",
      overwrite: "auto"
    });

    gsap.to(dotRef.current, {
      opacity: cursorMode !== "default" ? 0 : 1,
      duration: 0.3
    });
  }, [cursorMode, isMounted]);

  if (!isMounted) return null;

  const isPill = cursorMode === "exp" || cursorMode === "tech";
  const isPointer = cursorMode === "pointer";

  return (
    <>
      {/* Precision Inner Dot (instant tracking) */}
      <div
        ref={dotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-brand-red rounded-none pointer-events-none z-[9999]"
      />

      {/* Smooth Transparent Follower Box/Pill (Only Boundary & Text Change Color) */}
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9998]"
      >
        <div
          ref={followerPillRef}
          className={`flex items-center justify-center font-mono text-[11px] uppercase tracking-wider bg-transparent rounded-none transition-colors duration-200 ${
            isPill
              ? "border-2 border-brand-red text-brand-red font-bold"
              : isPointer
              ? "border-2 border-white text-white"
              : "border border-white"
          }`}
        >
          {cursorText ? <span>{cursorText}</span> : null}
        </div>
      </div>
    </>
  );
}
