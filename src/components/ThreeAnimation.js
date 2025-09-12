import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = ({ darkMode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    const backgroundColor = darkMode ? 0x111827 : 0xf3f4f6;
    const primaryColor = darkMode ? 0x3b82f6 : 0x1e40af;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    renderer.domElement.style.pointerEvents = 'auto';
    mountNode.appendChild(renderer.domElement);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const particleData = [];


    for (let i = 0; i < particleCount; i++) {
      const radius = 15 + Math.random() * 40;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.0001 + Math.random() * 0.0004;
      const centerX = (Math.random() - 0.5) * 80;
      const centerY = (Math.random() - 0.5) * 80;
      const centerZ = (Math.random() - 0.5) * 60;
      
      positions[i * 3] = centerX + Math.cos(angle) * radius;
      positions[i * 3 + 1] = centerY + Math.sin(angle) * radius;
      positions[i * 3 + 2] = centerZ;
      
      sizes[i] = 0.5 + Math.random() * 1.5;
      
      particleData.push({
        radius,
        angle,
        speed,
        centerX,
        centerY,
        centerZ,
        baseOpacity: 0.3 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.01 + Math.random() * 0.02
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particleGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      transparent: true,
      opacity: 0.4,
      map: createCircleTexture(),
      alphaTest: 0.1,
      sizeAttenuation: true
    });

    function createCircleTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const context = canvas.getContext('2d');
      
      const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.7, 'rgba(255, 255, 255, 0.8)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, 32, 32);
      
      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    }

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = 8;

    const animate = function () {
      requestAnimationFrame(animate);

      const positions = particleGeometry.attributes.position.array;
      const sizes = particleGeometry.attributes.size.array;
      
      for (let i = 0; i < particleCount; i++) {
        const data = particleData[i];
        
        data.angle += data.speed;
        data.pulsePhase += data.pulseSpeed;
        
        positions[i * 3] = data.centerX + Math.cos(data.angle) * data.radius;
        positions[i * 3 + 1] = data.centerY + Math.sin(data.angle) * data.radius;
        positions[i * 3 + 2] = data.centerZ + Math.sin(data.angle * 0.3) * 8;
        
        const sizePulse = Math.sin(data.pulsePhase * 0.7) * 0.2 + 1;
        sizes[i] = (0.5 + Math.random() * 1.5) * sizePulse;
      }
      
      particleGeometry.attributes.position.needsUpdate = true;
      particleGeometry.attributes.size.needsUpdate = true;

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();


    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountNode && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [darkMode]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        zIndex: 1
      }}
    />
  );
};

export default ThreeAnimation;
