"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import JewelleryTextOverlays from "./JewelleryTextOverlays";

interface JewelleryScrollProps {
  totalFrames?: number;
  folderPath?: string;
}

export default function JewelleryScroll({
  totalFrames = 120,
  folderPath = "/images/jewellery",
}: JewelleryScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Render a specific frame onto the canvas (Full-Width Cover Fit)
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // Find the requested frame, or fallback to the nearest loaded frame
      let img = imagesRef.current[frameIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
        // Look for nearest loaded frame
        for (let offset = 1; offset < totalFrames; offset++) {
          const prev = imagesRef.current[frameIndex - offset];
          if (prev && prev.complete && prev.naturalWidth > 0) {
            img = prev;
            break;
          }
          const next = imagesRef.current[frameIndex + offset];
          if (next && next.complete && next.naturalWidth > 0) {
            img = next;
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) {
        img = imagesRef.current[0];
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const width = canvas.clientWidth || (typeof window !== "undefined" ? window.innerWidth : 1920);
      const height = canvas.clientHeight || (typeof window !== "undefined" ? window.innerHeight : 1080);

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      // Full-bleed Cover Mode (Occupy 100% of viewport width and height with zero empty side margins)
      const imgRatio = img.naturalWidth / img.naturalHeight;
      const canvasRatio = width / height;

      let drawWidth: number;
      let drawHeight: number;

      if (canvasRatio > imgRatio) {
        drawWidth = width;
        drawHeight = width / imgRatio;
      } else {
        drawHeight = height;
        drawWidth = height * imgRatio;
      }

      const offsetX = (width - drawWidth) / 2;
      const offsetY = (height - drawHeight) / 2;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

      ctx.restore();
    },
    [totalFrames]
  );

  // Sync scroll with canvas rendering using requestAnimationFrame
  const requestFrameRender = useCallback(
    (index: number) => {
      currentFrameRef.current = index;
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      animationFrameIdRef.current = requestAnimationFrame(() => {
        renderFrame(currentFrameRef.current);
      });
    },
    [renderFrame]
  );

  // Preload all 120 frames & immediately render frame 1 as soon as it arrives
  useEffect(() => {
    let isCancelled = false;
    const images: HTMLImageElement[] = new Array(totalFrames);
    imagesRef.current = images;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      img.src = `${folderPath}/${i}.webp`;

      img.onload = () => {
        if (isCancelled) return;
        if (i === 1 || i - 1 === currentFrameRef.current) {
          setIsLoaded(true);
          renderFrame(currentFrameRef.current);
        }
      };

      img.onerror = () => {
        if (isCancelled) return;
        img.src = `${folderPath}/${i}.jpg`;
      };

      images[i - 1] = img;
    }

    // If frame 1 is already in cache, draw immediately
    if (images[0] && images[0].complete && images[0].naturalWidth > 0) {
      setIsLoaded(true);
      renderFrame(0);
    }

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, folderPath, renderFrame]);

  // Listen to scroll progress changes from Framer Motion
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (prefersReducedMotion) {
      requestFrameRender(totalFrames - 1);
      return;
    }
    const targetIndex = Math.min(
      totalFrames - 1,
      Math.max(0, Math.floor(latest * totalFrames))
    );
    if (targetIndex !== currentFrameRef.current) {
      requestFrameRender(targetIndex);
    }
  });

  // Handle initial render & window resize
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Initial draw pass
    renderFrame(currentFrameRef.current);

    const timer = setTimeout(() => {
      renderFrame(currentFrameRef.current);
    }, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [isLoaded, prefersReducedMotion, totalFrames, renderFrame]);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{ position: "relative", height: "500vh", width: "100%" }}
      className="relative h-[500vh] w-full bg-jewellery-black"
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-jewellery-black"
      >
        {/* Ambient Stage Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,16,21,0.45)_0%,_rgba(36,6,9,0.3)_45%,_rgba(5,5,5,1)_85%)] pointer-events-none" />

        {/* Full-Bleed Edge-to-Edge HTML5 Canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic Full-Width Text Overlays */}
        <JewelleryTextOverlays progress={scrollYProgress} />
      </div>
    </section>
  );
}