import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ value, suffix = '', className = '' }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const countingRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (inView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let currentStep = 0;

      countingRef.current = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.floor(stepValue * currentStep), value));

        if (currentStep >= steps) {
          clearInterval(countingRef.current);
        }
      }, duration / steps);
    }

    return () => {
      if (countingRef.current) {
        clearInterval(countingRef.current);
      }
    };
  }, [inView, value]);

  return (
    <div ref={ref} className={className}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}