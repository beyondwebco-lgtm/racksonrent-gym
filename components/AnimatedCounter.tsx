"use client";

import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  targetNumber: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
}

export default function AnimatedCounter({
  targetNumber,
  prefix = "",
  suffix = "",
  durationMs = 1200,
}: AnimatedCounterProps) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / durationMs, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCurrentNumber(Math.floor(easeProgress * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, targetNumber, durationMs]);

  return (
    <span ref={ref}>
      {prefix}
      {currentNumber.toLocaleString()}
      {suffix}
    </span>
  );
}
