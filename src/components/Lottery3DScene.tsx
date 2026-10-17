import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

interface Lottery3DSceneProps {
  reducedMotion?: boolean;
  onSceneReady?: () => void;
}

export const Lottery3DScene: React.FC<Lottery3DSceneProps> = ({ reducedMotion = false, onSceneReady }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglError, setWebglError] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglError(true);
      return;
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x180306, 0.024);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 14.5);

    const isHeadless = navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // Studio Environment reflection
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.05).texture;
    pmremGenerator.dispose();

    // Dussehra Warm Festive Lighting Rig (Warm Diyas + Saffron/Crimson Sky)
    const ambientLight = new THREE.AmbientLight(0xffecd2, 0.75);
    scene.add(ambientLight);

    // Golden Sunlight / Vijayadashami Key Light
    const keyLight = new THREE.DirectionalLight(0xffbf00, 3.2);
    keyLight.position.set(7, 9, 8);
    scene.add(keyLight);

    // Deep Royal Crimson & Diya Warm Fill Light
    const fillLight = new THREE.DirectionalLight(0xd9381e, 2.0);
    fillLight.position.set(-8, -4, 5);
    scene.add(fillLight);

    // Warm Golden Diya Uplight from the bottom stage
    const diyaStageLight = new THREE.PointLight(0xf59e0b, 3.5, 25);
    diyaStageLight.position.set(0, -6, 4);
    scene.add(diyaStageLight);

    const rimLight = new THREE.PointLight(0xffeedd, 3.0, 30);
    rimLight.position.set(0, 7, -6);
    scene.add(rimLight);

    // Auspicious Festive Dussehra Lottery Ball Textures (Royal Maroon, Antique Brass & Deep Gold)
    const createDussehraBallTexture = (numberStr: string, styleIdx: number) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d')!;

      // Background festive gradient (alternating Royal Maroon and Antique Gold)
      const grad = ctx.createLinearGradient(0, 0, 512, 512);
      if (styleIdx % 2 === 0) {
        // Deep Royal Maroon & Crimson Enamel
        grad.addColorStop(0, '#5b0e17');
        grad.addColorStop(0.35, '#881324');
        grad.addColorStop(0.7, '#43060e');
        grad.addColorStop(1, '#250207');
      } else {
        // Antique Saffron Gold & Brass
        grad.addColorStop(0, '#fef08a');
        grad.addColorStop(0.35, '#f59e0b');
        grad.addColorStop(0.75, '#b45309');
        grad.addColorStop(1, '#78350f');
      }
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 512);

      // Ornate Sacred Indian Medallion Border
      ctx.save();
      ctx.translate(256, 256);

      // Lotus petal decorative ring
      const petals = 16;
      ctx.fillStyle = styleIdx % 2 === 0 ? 'rgba(254, 240, 138, 0.45)' : 'rgba(120, 53, 15, 0.45)';
      for (let p = 0; p < petals; p++) {
        ctx.save();
        ctx.rotate((p * Math.PI * 2) / petals);
        ctx.beginPath();
        ctx.arc(0, -165, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Outer Beaded Ring
      ctx.beginPath();
      ctx.arc(0, 0, 150, 0, Math.PI * 2);
      ctx.strokeStyle = '#fde68a';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Inner Medallion Background
      ctx.beginPath();
      ctx.arc(0, 0, 134, 0, Math.PI * 2);
      ctx.fillStyle = styleIdx % 2 === 0 ? '#1f0408' : '#3e1703';
      ctx.fill();
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 3.5;
      ctx.stroke();

      // Number in Regal Cinzel typography
      ctx.fillStyle = styleIdx % 2 === 0 ? '#fef08a' : '#fffbeb';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 115px "Cinzel", serif';
      ctx.shadowColor = 'rgba(245, 158, 11, 0.9)';
      ctx.shadowBlur = 18;
      ctx.fillText(numberStr, 0, -6);

      // Auspicious Dussehra Subtitle
      ctx.font = 'bold 22px "Cinzel", serif';
      ctx.fillStyle = '#fbbf24';
      ctx.fillText('• DUSSEHRA •', 0, 78);

      ctx.restore();

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };

    // Central 3D Group
    const grandLotteryGroup = new THREE.Group();
    scene.add(grandLotteryGroup);

    // 1. Central Golden Surya / Sunburst Core
    const coreSphereGeo = new THREE.SphereGeometry(1.35, 64, 64);
    const coreSphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xffa000,
      metalness: 0.96,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 1.0,
    });
    const coreSphere = new THREE.Mesh(coreSphereGeo, coreSphereMat);
    grandLotteryGroup.add(coreSphere);

    // 2. Ceremonial Torus Rings (Concentric Golden Mandalas)
    const ringGeo = new THREE.TorusGeometry(3.6, 0.075, 32, 120);
    const ringMat = new THREE.MeshPhysicalMaterial({
      color: 0xfde047,
      metalness: 0.98,
      roughness: 0.14,
      clearcoat: 0.9,
    });
    const mainRing = new THREE.Mesh(ringGeo, ringMat);
    mainRing.rotation.x = Math.PI / 3;
    grandLotteryGroup.add(mainRing);

    const outerRingGeo = new THREE.TorusGeometry(4.9, 0.045, 32, 140);
    const outerRing = new THREE.Mesh(outerRingGeo, ringMat);
    outerRing.rotation.y = Math.PI / 4;
    grandLotteryGroup.add(outerRing);

    // 3. Auspicious Festive Indian Lottery Balls Orbiting Elegantly
    // 7, 21, 51, 77, 101, 108 are sacred numbers in Indian celebrations
    const auspiciousNumbers = ['7', '21', '51', '77', '101', '108'];
    const ballMeshes: {
      mesh: THREE.Mesh;
      orbitRadius: number;
      orbitSpeed: number;
      orbitAngle: number;
      yPhase: number;
      rotSpeed: { x: number; y: number; z: number };
    }[] = [];

    const ballGeo = new THREE.SphereGeometry(0.72, 48, 48);

    auspiciousNumbers.forEach((num, index) => {
      const texture = createDussehraBallTexture(num, index);
      const ballMat = new THREE.MeshPhysicalMaterial({
        map: texture,
        metalness: 0.88,
        roughness: 0.15,
        clearcoat: 1.0,
        clearcoatRoughness: 0.08,
      });

      const mesh = new THREE.Mesh(ballGeo, ballMat);
      const orbitRadius = 3.2 + (index % 3) * 0.85;
      const initialAngle = (index / auspiciousNumbers.length) * Math.PI * 2;
      const orbitSpeed = 0.22 * (index % 2 === 0 ? 1 : -0.85);

      mesh.position.set(
        Math.cos(initialAngle) * orbitRadius,
        Math.sin(index * 1.1) * 1.3,
        Math.sin(initialAngle) * orbitRadius * 0.75
      );

      grandLotteryGroup.add(mesh);
      ballMeshes.push({
        mesh,
        orbitRadius,
        orbitSpeed,
        orbitAngle: initialAngle,
        yPhase: index * 0.9,
        rotSpeed: {
          x: 0.35 + Math.random() * 0.25,
          y: 0.45 + Math.random() * 0.35,
          z: 0.2 + Math.random() * 0.25,
        },
      });
    });

    // 4. Background Festive Floating Golden Spheres (soft depth)
    const bgBalls: { mesh: THREE.Mesh; basePos: THREE.Vector3; speed: number; phase: number }[] = [];
    const bgBallGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const bgBallMat = new THREE.MeshPhysicalMaterial({
      color: 0xf59e0b,
      metalness: 0.92,
      roughness: 0.2,
      clearcoat: 0.6,
      transparent: true,
      opacity: 0.7,
    });

    for (let i = 0; i < 16; i++) {
      const bgMesh = new THREE.Mesh(bgBallGeo, bgBallMat);
      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 14;
      const z = -2 - Math.random() * 9;
      bgMesh.position.set(x, y, z);
      const s = 0.5 + Math.random() * 0.8;
      bgMesh.scale.set(s, s, s);
      scene.add(bgMesh);
      bgBalls.push({
        mesh: bgMesh,
        basePos: new THREE.Vector3(x, y, z),
        speed: 0.35 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // 5. Golden Firework Embers & Dussehra Sparks (Particle System)
    const particleCount = 420;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const speedArray = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      posArray[i * 3] = (Math.random() - 0.5) * 26;
      posArray[i * 3 + 1] = (Math.random() - 0.5) * 18;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 16;
      speedArray[i] = 0.25 + Math.random() * 0.75;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Warm Golden Ember Particle Texture
    const pCanvas = document.createElement('canvas');
    pCanvas.width = 64;
    pCanvas.height = 64;
    const pCtx = pCanvas.getContext('2d')!;
    const pGrad = pCtx.createRadialGradient(32, 32, 0, 32, 32, 32);
    pGrad.addColorStop(0, 'rgba(255, 245, 200, 1)');
    pGrad.addColorStop(0.35, 'rgba(245, 158, 11, 0.85)');
    pGrad.addColorStop(0.75, 'rgba(234, 88, 12, 0.3)');
    pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    pCtx.fillStyle = pGrad;
    pCtx.fillRect(0, 0, 64, 64);
    const particleTex = new THREE.CanvasTexture(pCanvas);

    const particleMat = new THREE.PointsMaterial({
      size: 0.34,
      map: particleTex,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0xffdf70,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Interactive Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      mouseX = (clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = Math.min(clock.getDelta(), 0.1);
      const elapsedTime = clock.getElapsedTime();

      // Camera parallax damping
      if (!reducedMotion) {
        targetCameraX = mouseX * 1.3;
        targetCameraY = mouseY * 0.9;
        camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCameraX, 2.5, delta);
        camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCameraY, 2.5, delta);
        camera.lookAt(0, 0, 0);
      }

      if (!reducedMotion) {
        // Rotate golden rings
        mainRing.rotation.z += delta * 0.15;
        outerRing.rotation.x += delta * 0.1;
        outerRing.rotation.y += delta * 0.12;

        // Core sunburst subtle pulse
        const pulse = 1.0 + Math.sin(elapsedTime * 2.2) * 0.035;
        coreSphere.scale.set(pulse, pulse, pulse);

        // Orbiting Dussehra balls
        ballMeshes.forEach(item => {
          item.orbitAngle += item.orbitSpeed * delta;
          item.mesh.position.x = Math.cos(item.orbitAngle) * item.orbitRadius;
          item.mesh.position.z = Math.sin(item.orbitAngle) * item.orbitRadius * 0.75;
          item.mesh.position.y = Math.sin(elapsedTime * 1.3 + item.yPhase) * 1.3;

          item.mesh.rotation.x += item.rotSpeed.x * delta;
          item.mesh.rotation.y += item.rotSpeed.y * delta;
          item.mesh.rotation.z += item.rotSpeed.z * delta;
        });

        // Background floating balls
        bgBalls.forEach(item => {
          item.mesh.position.y = item.basePos.y + Math.sin(elapsedTime * item.speed + item.phase) * 0.55;
          item.mesh.rotation.y += delta * 0.25;
        });

        // Golden embers rising continuously
        const positions = particleGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          positions[i * 3 + 1] += speedArray[i] * delta * 0.45;
          if (positions[i * 3 + 1] > 9) {
            positions[i * 3 + 1] = -9;
          }
        }
        particleGeo.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();
    if (onSceneReady) onSceneReady();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      particleGeo.dispose();
      particleMat.dispose();
      coreSphereGeo.dispose();
      coreSphereMat.dispose();
      ringGeo.dispose();
      outerRingGeo.dispose();
      ringMat.dispose();
      ballGeo.dispose();
      bgBallGeo.dispose();
      bgBallMat.dispose();
      renderer.dispose();
      if (container && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion, onSceneReady]);

  if (webglError) {
    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden bg-radial from-amber-950/30 via-[#200407] to-[#0c0103]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-amber-500/20 animate-rotate-slow" />
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-1 overflow-hidden"
      aria-hidden="true"
    />
  );
};
