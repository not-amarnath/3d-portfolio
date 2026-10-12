import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Float } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Desktop Workstation 3D Model
const DesktopComputers = () => {
  const computer = useGLTF("./desktop_pc/scene.glb");

  return (
    <mesh>
      <ambientLight intensity={1.2} />
      <hemisphereLight intensity={0.7} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Ultra-fast, lightweight procedural 3D Holographic Core for Mobile & Tablet (0 KB download, 0ms lag)
const MobileTechHolo = () => {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5;
      coreRef.current.rotation.x += delta * 0.25;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.4;
      ring1Ref.current.rotation.x -= delta * 0.3;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.45;
      ring2Ref.current.rotation.z += delta * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x += delta * 0.35;
    }
  });

  return (
    <group position={[0, -2.3, 0]} scale={0.88}>
      {/* Central Floating Neon Icosahedron */}
      <mesh ref={coreRef} scale={1.15}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#915EFF'
          emissive='#431b8a'
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.85}
        />
      </mesh>

      {/* Futuristic Wireframe Shell */}
      <mesh scale={1.19}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color='#00cea8' wireframe transparent opacity={0.35} />
      </mesh>

      {/* Orbiting Neon Torus Rings */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.85, 0.03, 16, 80]} />
        <meshStandardMaterial color='#00cea8' emissive='#00cea8' emissiveIntensity={1.2} />
      </mesh>

      <mesh ref={ring2Ref} rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
        <torusGeometry args={[2.1, 0.025, 16, 80]} />
        <meshStandardMaterial color='#ec4899' emissive='#ec4899' emissiveIntensity={1} />
      </mesh>

      <mesh ref={ring3Ref} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
        <torusGeometry args={[2.35, 0.02, 16, 80]} />
        <meshStandardMaterial color='#804dee' emissive='#915eff' emissiveIntensity={0.9} />
      </mesh>
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Screen width under 1024px or touchscreen device
      const isSmallOrTouch =
        window.innerWidth < 1024 ||
        ("ontouchstart" in window && window.innerWidth < 1200) ||
        (navigator.maxTouchPoints > 0 && window.innerWidth < 1200);

      setIsMobileOrTablet(isSmallOrTouch);
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div
      className={`w-full h-full relative ${
        isMobileOrTablet ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      <Canvas
        frameloop={isMobileOrTablet ? "always" : "demand"}
        shadows={!isMobileOrTablet}
        dpr={[1, isMobileOrTablet ? 1.25 : 2]}
        camera={
          isMobileOrTablet
            ? { position: [0, 0, 7], fov: 45 }
            : { position: [20, 3, 5], fov: 25 }
        }
        gl={{ preserveDrawingBuffer: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={isMobileOrTablet ? 0.9 : 1.2} />
        <directionalLight
          position={isMobileOrTablet ? [5, 10, 5] : [-20, 50, 10]}
          intensity={1.5}
        />
        {isMobileOrTablet && (
          <pointLight position={[-5, -5, -5]} color='#915eff' intensity={2} />
        )}

        <Suspense fallback={<CanvasLoader />}>
          {isMobileOrTablet ? (
            <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
              <MobileTechHolo />
            </Float>
          ) : (
            <>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <DesktopComputers />
            </>
          )}
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;