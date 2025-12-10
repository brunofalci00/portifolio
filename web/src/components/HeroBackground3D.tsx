"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Floating particles component
function Particles({ count = 200, scrollProgress = 0 }) {
  const mesh = useRef<THREE.Points>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Generate random positions for particles
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const colorOrange = new THREE.Color("#FB923C");
    const colorPink = new THREE.Color("#EC4899");
    const colorPurple = new THREE.Color("#8B5CF6");

    for (let i = 0; i < count; i++) {
      const theta = pseudoRandom(i + 1) * Math.PI * 2;
      const phi = Math.acos(2 * pseudoRandom(i + count + 1) - 1);
      const radius = 3 + pseudoRandom(i + count * 2 + 1) * 5;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 2;

      const colorChoice = pseudoRandom(i + count * 3 + 1);
      let color;
      if (colorChoice < 0.33) {
        color = colorOrange;
      } else if (colorChoice < 0.66) {
        color = colorPink;
      } else {
        color = colorPurple;
      }

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return [positions, colors];
  }, [count]);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate particles
  useFrame((state) => {
    if (!mesh.current) return;

    const time = state.clock.elapsedTime;
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Gentle floating motion
      positions[i3] += Math.sin(time * 0.3 + i * 0.1) * 0.002;
      positions[i3 + 1] += Math.cos(time * 0.2 + i * 0.1) * 0.002;
      positions[i3 + 2] += Math.sin(time * 0.4 + i * 0.1) * 0.001;

      // React to mouse
      positions[i3] += mousePos.current.x * 0.001;
      positions[i3 + 1] += mousePos.current.y * 0.001;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;

    // Rotate entire particle system slowly
    mesh.current.rotation.y = time * 0.05;
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    // React to scroll
    mesh.current.position.z = scrollProgress * -2;
  });

  // Create geometry with attributes
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating glowing orb
function GlowOrb({
  position,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  speed?: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;
    mesh.current.position.y = position[1] + Math.sin(time * speed) * 0.3;
    mesh.current.position.x = position[0] + Math.cos(time * speed * 0.5) * 0.2;
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[0.5 * scale, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.7}
        />
      </Sphere>
    </Float>
  );
}

// Central morphing sphere
function CentralSphere({ scrollProgress = 0 }) {
  const mesh = useRef<THREE.Mesh>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.elapsedTime;

    // Slow rotation
    mesh.current.rotation.x = time * 0.1;
    mesh.current.rotation.y = time * 0.15;

    // React to mouse
    mesh.current.rotation.x += mousePos.current.y * 0.3;
    mesh.current.rotation.y += mousePos.current.x * 0.3;

    // Scale based on scroll
    const scale = 1 - scrollProgress * 0.3;
    mesh.current.scale.setScalar(scale);
  });

  return (
    <Sphere ref={mesh} args={[1.5, 64, 64]} position={[0, 0, -1]}>
      <MeshDistortMaterial
        color="#FB923C"
        attach="material"
        distort={0.5}
        speed={1.5}
        roughness={0.2}
        metalness={0.9}
        emissive="#EC4899"
        emissiveIntensity={0.3}
        transparent
        opacity={0.6}
      />
    </Sphere>
  );
}

// Scene component
function Scene({ scrollProgress = 0 }) {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />

      {/* Point lights for glow effect */}
      <pointLight position={[5, 5, 5]} intensity={1} color="#FB923C" />
      <pointLight position={[-5, -5, 5]} intensity={0.8} color="#EC4899" />
      <pointLight position={[0, 5, -5]} intensity={0.6} color="#8B5CF6" />

      {/* Central morphing sphere */}
      <CentralSphere scrollProgress={scrollProgress} />

      {/* Floating particles */}
      <Particles count={150} scrollProgress={scrollProgress} />

      {/* Floating orbs */}
      <GlowOrb position={[-3, 1, -2]} color="#FB923C" scale={0.6} speed={1.2} />
      <GlowOrb position={[3, -1, -3]} color="#EC4899" scale={0.5} speed={0.8} />
      <GlowOrb position={[2, 2, -4]} color="#8B5CF6" scale={0.4} speed={1} />
      <GlowOrb position={[-2, -2, -2]} color="#FB923C" scale={0.3} speed={1.5} />
    </>
  );
}

// Camera controller for responsive behavior
function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  return null;
}

// Main component
interface HeroBackground3DProps {
  scrollProgress?: number;
  className?: string;
}

export default function HeroBackground3D({
  scrollProgress = 0,
  className = "",
}: HeroBackground3DProps) {
  const isClient = typeof window !== "undefined";

  if (!isClient) {
    return (
      <div className={`bg-gradient-to-b from-[#0a0a12] to-[#0a0a12] ${className}`} />
    );
  }

  return (
    <div className={className}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
      >
        <CameraController />
        <Scene scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
