import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const HologramCore = () => {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.4;
      coreRef.current.rotation.y += delta * 0.6;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.8;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.7;
      ring2Ref.current.rotation.z += delta * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.5;
      ring3Ref.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <group>
      {/* Central Holographic Crystal */}
      <mesh ref={coreRef} scale={1.2}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color='#915EFF'
          emissive='#431b8a'
          emissiveIntensity={0.6}
          roughness={0.15}
          metalness={0.85}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe Outline */}
      <mesh scale={1.22}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color='#d8b4fe' wireframe={true} transparent opacity={0.4} />
      </mesh>

      {/* Outer Orbiting Ring 1 */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.0, 0.03, 16, 100]} />
        <meshStandardMaterial color='#804dee' emissive='#915eff' emissiveIntensity={1} />
      </mesh>

      {/* Outer Orbiting Ring 2 */}
      <mesh ref={ring2Ref} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.3, 0.03, 16, 100]} />
        <meshStandardMaterial color='#00cea8' emissive='#00cea8' emissiveIntensity={0.8} />
      </mesh>

      {/* Outer Orbiting Ring 3 */}
      <mesh ref={ring3Ref} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.6, 0.02, 16, 100]} />
        <meshStandardMaterial color='#ec4899' emissive='#ec4899' emissiveIntensity={0.7} />
      </mesh>
    </group>
  );
};

const HoloBadgeCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className='w-full h-full min-h-[300px] flex items-center justify-center'>
      {isVisible ? (
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ preserveDrawingBuffer: false, powerPreference: "low-power" }}
          className='touch-pan-y'
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 10, 5]} intensity={1.5} />
          <pointLight position={[-5, -5, -5]} color='#915eff' intensity={2} />

          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
            <Float speed={2} rotationIntensity={0.8} floatIntensity={1.5}>
              <HologramCore />
            </Float>
            <Preload all />
          </Suspense>
        </Canvas>
      ) : null}
    </div>
  );
};

export default HoloBadgeCanvas;
