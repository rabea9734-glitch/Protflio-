import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HeroThreeSceneProps {
  interactive?: boolean;
}

export const HeroThreeScene: React.FC<HeroThreeSceneProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene Setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      // Graceful fallback if WebGL is unsupported in current environment
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05070b, 0.035);

    const width = container.clientWidth || window.innerWidth || 800;
    const height = container.clientHeight || window.innerHeight || 600;

    const camera = new THREE.PerspectiveCamera(45, width / Math.max(height, 1), 0.1, 100);
    camera.position.z = 18;
    camera.position.y = 1;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // 1. Data Node Constellation (BufferGeometry Points & Lines)
    const particleCount = prefersReducedMotion ? 60 : 180;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const originalPositions: number[] = [];

    const color1 = new THREE.Color(0x38bdf8); // Cyan
    const color2 = new THREE.Color(0x3b82f6); // Blue
    const color3 = new THREE.Color(0x10b981); // Emerald

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = (radius * Math.sin(phi) * Math.sin(theta)) * 0.75;
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions.push(x, y, z);

      // Color gradient distribution
      const mixedColor = Math.random() > 0.4 ? color1.clone().lerp(color2, Math.random()) : color3;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    const pointsGeometry = new THREE.BufferGeometry();
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle texture for soft round particles
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255,255,255,1)');
        gradient.addColorStop(0.3, 'rgba(56,189,248,0.8)');
        gradient.addColorStop(0.8, 'rgba(14,165,233,0.15)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      return new THREE.CanvasTexture(canvas);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.35,
      map: createCircleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    worldGroup.add(pointCloud);

    // 2. Dynamic Connection Lines between adjacent nodes
    const maxConnections = particleCount * 2;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineColors = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    worldGroup.add(linesMesh);

    // 3. Concentric Telemetry Coordinate Rings
    const createRing = (radius: number, colorHex: number, opacity: number, rotationX: number) => {
      const ringGeom = new THREE.BufferGeometry();
      const segments = 90;
      const ringPositions = new Float32Array((segments + 1) * 3);
      for (let i = 0; i <= segments; i++) {
        const angle = (i / segments) * Math.PI * 2;
        ringPositions[i * 3] = Math.cos(angle) * radius;
        ringPositions[i * 3 + 1] = Math.sin(angle) * radius;
        ringPositions[i * 3 + 2] = 0;
      }
      ringGeom.setAttribute('position', new THREE.BufferAttribute(ringPositions, 3));
      const ringMat = new THREE.LineBasicMaterial({
        color: colorHex,
        transparent: true,
        opacity: opacity,
        blending: THREE.AdditiveBlending
      });
      const ring = new THREE.Line(ringGeom, ringMat);
      ring.rotation.x = rotationX;
      return ring;
    };

    const ring1 = createRing(5.2, 0x38bdf8, 0.25, Math.PI / 2.3);
    const ring2 = createRing(4.2, 0x3b82f6, 0.18, Math.PI / 1.8);
    const ring3 = createRing(6.5, 0x10b981, 0.15, Math.PI / 2.8);
    worldGroup.add(ring1);
    worldGroup.add(ring2);
    worldGroup.add(ring3);

    // 4. Central Data Core Sphere Wireframe
    const coreGeom = new THREE.IcosahedronGeometry(1.6, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x0284c7,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    worldGroup.add(coreMesh);

    // Mouse Tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = normX * 0.8;
      mouseRef.current.targetY = normY * 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Resize handling via ResizeObserver
    let resizeReqId: number | null = null;
    const resizeObserver = new ResizeObserver((entries) => {
      if (resizeReqId) cancelAnimationFrame(resizeReqId);
      resizeReqId = requestAnimationFrame(() => {
        for (const entry of entries) {
          const { width: newW, height: newH } = entry.contentRect;
          if (newW > 0 && newH > 0 && renderer) {
            camera.aspect = newW / newH;
            camera.updateProjectionMatrix();
            renderer.setSize(newW, newH);
          }
        }
      });
    });
    resizeObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Mouse lerping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (!prefersReducedMotion) {
        // Subtle rhythmic rotations
        worldGroup.rotation.y = elapsedTime * 0.12 + mouseRef.current.x * 0.4;
        worldGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 + mouseRef.current.y * 0.25;

        ring1.rotation.z = elapsedTime * 0.15;
        ring2.rotation.z = -elapsedTime * 0.1;
        ring3.rotation.z = elapsedTime * 0.08;

        coreMesh.rotation.y = -elapsedTime * 0.25;
        coreMesh.rotation.x = elapsedTime * 0.18;

        // Particle wave oscillation
        const posAttr = pointsGeometry.attributes.position as THREE.BufferAttribute;
        const currentPos = posAttr.array as Float32Array;

        for (let i = 0; i < particleCount; i++) {
          const idx = i * 3;
          const ox = originalPositions[idx];
          const oy = originalPositions[idx + 1];
          const oz = originalPositions[idx + 2];

          // Harmonic pulse
          const wave = Math.sin(elapsedTime * 1.5 + i * 0.3) * 0.12;
          currentPos[idx] = ox + ox * wave;
          currentPos[idx + 1] = oy + oy * wave;
          currentPos[idx + 2] = oz + oz * wave;
        }
        posAttr.needsUpdate = true;

        // Recalculate node connection lines
        let connectionIdx = 0;
        const maxDist = 2.4;
        const maxDistSq = maxDist * maxDist;

        for (let i = 0; i < particleCount && connectionIdx < maxConnections; i++) {
          const x1 = currentPos[i * 3];
          const y1 = currentPos[i * 3 + 1];
          const z1 = currentPos[i * 3 + 2];

          for (let j = i + 1; j < particleCount && connectionIdx < maxConnections; j++) {
            const x2 = currentPos[j * 3];
            const y2 = currentPos[j * 3 + 1];
            const z2 = currentPos[j * 3 + 2];

            const dx = x1 - x2;
            const dy = y1 - y2;
            const dz = z1 - z2;
            const distSq = dx * dx + dy * dy + dz * dz;

            if (distSq < maxDistSq) {
              const alpha = 1 - Math.sqrt(distSq) / maxDist;
              const linePosIdx = connectionIdx * 6;

              linePositions[linePosIdx] = x1;
              linePositions[linePosIdx + 1] = y1;
              linePositions[linePosIdx + 2] = z1;
              linePositions[linePosIdx + 3] = x2;
              linePositions[linePosIdx + 4] = y2;
              linePositions[linePosIdx + 5] = z2;

              const cR = 0.22 * alpha;
              const cG = 0.74 * alpha;
              const cB = 0.97 * alpha;

              lineColors[linePosIdx] = cR;
              lineColors[linePosIdx + 1] = cG;
              lineColors[linePosIdx + 2] = cB;
              lineColors[linePosIdx + 3] = cR;
              lineColors[linePosIdx + 4] = cG;
              lineColors[linePosIdx + 5] = cB;

              connectionIdx++;
            }
          }
        }

        lineGeometry.setDrawRange(0, connectionIdx * 2);
        (lineGeometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
        (lineGeometry.attributes.color as THREE.BufferAttribute).needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeom.dispose();
      coreMat.dispose();
    };
  }, [interactive]);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
