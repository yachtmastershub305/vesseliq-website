"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Brand aligned WebGL hero scene. A wireframe ocean plane with slow rolling
// swells in VesselIQ teal on navy ink, with a JetBrains Mono HUD overlay
// reporting live telemetry status. Drop into any page as a self contained
// full bleed element. The nav (z-index 80 in globals.css) stays above this.

function usePrefersReducedMotion(): boolean {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return reduceMotion;
}

function TelemetryGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  const skipMotion = usePrefersReducedMotion();

  // 50x50 segments = 2,601 vertices. Calculated once via useMemo so the
  // BufferGeometry is stable across frames.
  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(160, 160, 50, 50);
    geo.rotateX(-Math.PI / 2);
    return geo;
  }, []);

  useFrame((state) => {
    if (skipMotion) return;

    const time = state.clock.getElapsedTime();
    const positions = geometry.attributes.position as THREE.BufferAttribute;
    const count = positions.count;

    for (let i = 0; i < count; i++) {
      const x = positions.getX(i);
      const z = positions.getZ(i);

      // Calmer than the cyberpunk version: amplitudes scaled down, frequencies
      // halved. Reads as ocean swell rather than oscilloscope chatter.
      const swell1 = Math.sin(x * 0.05 + time * 0.6) * 1.8;
      const swell2 = Math.cos(z * 0.04 + time * 0.5) * 1.4;
      const chop = Math.sin((x + z) * 0.08 + time * 0.8) * 0.5;

      positions.setY(i, swell1 + swell2 + chop);
    }

    positions.needsUpdate = true;

    // Slow cinematic orbit. 0.02 rad/s keeps it on the edge of perceptible
    // motion; faster reads as a screensaver, slower reads as static.
    state.camera.position.x = Math.sin(time * 0.02) * 10;
    state.camera.position.z = Math.cos(time * 0.02) * 40 + 20;
    state.camera.lookAt(0, -4, 0);
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshBasicMaterial color="#0a8a78" wireframe transparent opacity={0.25} />
    </mesh>
  );
}

type TelemetryOceanProps = {
  // Optional override for the HUD strings. Defaults read as a plausible
  // live status, swap for real numbers once the platform is feeding them.
  hud?: {
    primary?: string;
    detailA?: string;
    detailB?: string;
  };
  // Fixed positioning vs flowing in document. Defaults to flowing (the page
  // controls height); set fullViewport when used as a hero background.
  fullViewport?: boolean;
};

export function TelemetryOcean({ hud, fullViewport = true }: TelemetryOceanProps) {
  const primary = hud?.primary ?? "VESSEL TELEMETRY · LIVE";
  const detailA = hud?.detailA ?? "MQTT v5 · 2,400 MSG/S";
  const detailB = hud?.detailB ?? "23 HULLS ONLINE";

  return (
    <div
      className="vesseliq-canvas-container"
      style={{
        width: "100%",
        height: fullViewport ? "100vh" : "100%",
        backgroundColor: "#0c1117",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* HUD overlay. Pushed to top: 90px to clear the fixed nav (top: 16px,
          height ~50px). pointerEvents none so the canvas underneath stays
          interactive if we add controls later. */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 40,
          color: "#5eead4",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.22em",
          lineHeight: 2,
          pointerEvents: "none",
          zIndex: 5,
          opacity: 0.85,
        }}
      >
        <div>{primary}</div>
        <div style={{ color: "#a3b3c2", opacity: 0.6 }}>{detailA}</div>
        <div style={{ color: "#a3b3c2", opacity: 0.6 }}>{detailB}</div>
      </div>

      <Canvas camera={{ position: [0, 10, 40], fov: 55 }} gl={{ antialias: true }}>
        <fog attach="fog" args={["#0c1117", 20, 75]} />
        <TelemetryGrid />
      </Canvas>
    </div>
  );
}
