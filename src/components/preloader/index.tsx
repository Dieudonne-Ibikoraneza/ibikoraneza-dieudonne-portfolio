"use client";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import type { ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./loader";
import gsap from "gsap";

// Define context type
type PreloaderContextType = {
  isLoading: boolean;
  loadingPercent: number;
  bypassLoading: () => void;
};

// Initialize context
const INITIAL: PreloaderContextType = {
  isLoading: true,
  loadingPercent: 0,
  bypassLoading: () => {},
};
export const preloaderContext = createContext<PreloaderContextType>(INITIAL);

// Preloader props type
type PreloaderProps = {
  children: ReactNode;
  disabled?: boolean; // Optional prop
};

// Custom hook to access context
export const usePreloader = () => {
  const context = useContext(preloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

const LOADING_TIME = 2.5;

function Preloader({ children }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingPercent, setLoadingPercent] = useState(0);
  
  // useRef with initial value
  const loadingTween = useRef<gsap.core.Tween | null>(null);

  // Bypass loading logic
  const bypassLoading = () => {
    loadingTween.current?.progress(0.99).kill();
    setLoadingPercent(100);
    setIsLoading(false);
  };

  // Ref to track loading percent
  const loadingPercentRef = useRef<{ value: number }>({ value: 0 });

  // GSAP loading animation effect
  useEffect(() => {
    loadingTween.current = gsap.to(loadingPercentRef.current, {
      value: 100,
      duration: LOADING_TIME,
      ease: "power1.out", // Adjusted easing
      onUpdate: () => {
        setLoadingPercent(loadingPercentRef.current.value);
      },
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Clean up on component unmount
    return () => {
      loadingTween.current?.kill();
    };
  }, []);

  return (
    <preloaderContext.Provider
      value={{ isLoading, bypassLoading, loadingPercent }}
    >
      <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
      {children}
    </preloaderContext.Provider>
  );
}

export default Preloader;
