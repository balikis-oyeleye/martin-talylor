"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [isMobile, setIsMobile] = useState(false);

  const CURSOR_SIZE = 10;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 300, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 300, mass: 0.5 });
  const smoothScale = useSpring(scale, {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  });

  useEffect(() => {
    // Detect touch/mouse pointer
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - CURSOR_SIZE / 2);
      mouseY.set(e.clientY - CURSOR_SIZE / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const handleEnter = () => scale.set(3);
    const handleLeave = () => scale.set(1);

    const addListeners = () => {
      const targets = document.querySelectorAll("a, button, .magnetic");

      targets.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter);
        el.addEventListener("mouseleave", handleLeave);
      });

      return () => {
        targets.forEach((el) => {
          el.removeEventListener("mouseenter", handleEnter);
          el.removeEventListener("mouseleave", handleLeave);
        });
      };
    };

    let cleanup = addListeners();

    const observer = new MutationObserver(() => {
      cleanup();
      cleanup = addListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      cleanup();
    };
  }, [scale, isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-secondary z-[999] pointer-events-none mix-blend-difference hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
        scale: smoothScale,
      }}
    />
  );
};

export default Cursor;
