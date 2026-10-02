"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";

function GlobalEarthNodes() {
  const globeRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (globeRef.current) {
      globeRef.current.rotation.y = t * 0.12;
      globeRef.current.rotation.x = Math.sin(t * 0.08) * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.15;
      ringRef.current.rotation.x = Math.cos(t * 0.1) * 0.2;
    }
  });

  return (
    <group ref={globeRef} position={[3.2, 0, -2.5]}>
      {/* 3D Global Wireframe Earth Sphere */}
      <mesh scale={2.6}>
        <icosahedronGeometry args={[1, 4]} />
        <meshStandardMaterial
          color="#1677FF"
          emissive="#0D2854"
          wireframe={true}
          transparent={true}
          opacity={0.35}
        />
      </mesh>

      {/* Inner Core Atmosphere */}
      <mesh scale={2.5}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color="#071A3A"
          transparent={true}
          opacity={0.65}
        />
      </mesh>

      {/* Orbiting Global Data Ring */}
      <mesh ref={ringRef} scale={3.4}>
        <ringGeometry args={[0.95, 1.02, 64]} />
        <meshBasicMaterial
          color="#2F8CFF"
          side={THREE.DoubleSide}
          transparent={true}
          opacity={0.45}
          wireframe={true}
        />
      </mesh>

      {/* Floating Global Network Node Sparkles */}
      <Sparkles
        count={60}
        scale={4}
        size={4.5}
        speed={0.5}
        opacity={0.8}
        color="#2F8CFF"
      />
    </group>
  );
}

export default function Services3DCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-90">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1} color="#1677FF" />
        <GlobalEarthNodes />
        <Stars radius={50} depth={50} count={250} factor={3.5} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}
