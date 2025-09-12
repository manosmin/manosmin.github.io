// src/components/ThreeAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = ({ darkMode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    const backgroundColor = darkMode ? 0x111827 : 0xf3f4f6;
    const primaryColor = darkMode ? 0x3b82f6 : 0x1e40af;
    const secondaryColor = darkMode ? 0x8b5cf6 : 0x7c3aed;
    const accentColor = darkMode ? 0x06b6d4 : 0x0891b2;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    renderer.domElement.style.pointerEvents = 'auto';
    mountNode.appendChild(renderer.domElement);


    // Add ambient particles for subtle background animation
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const particleData = [];

    for (let i = 0; i < particleCount; i++) {
      // Create circular motion parameters
      const radius = 20 + Math.random() * 30;
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.0001 + Math.random() * 0.0004;
      const centerX = (Math.random() - 0.5) * 60;
      const centerY = (Math.random() - 0.5) * 60;
      const centerZ = (Math.random() - 0.5) * 40;
      
      positions[i * 3] = centerX + Math.cos(angle) * radius;
      positions[i * 3 + 1] = centerY + Math.sin(angle) * radius;
      positions[i * 3 + 2] = centerZ;
      
      particleData.push({
        radius,
        angle,
        speed,
        centerX,
        centerY,
        centerZ
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      color: primaryColor,
      size: 0.8,
      transparent: true,
      opacity: 0.4,
      map: createCircleTexture(),
      alphaTest: 0.1
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

    let animationTime = 0;

    const animate = function () {
      requestAnimationFrame(animate);
      animationTime += 0.01;

      // Animate particles in circular motion
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const data = particleData[i];
        
        // Update angle for circular motion
        data.angle += data.speed;
        
        // Calculate new position on circle
        positions[i * 3] = data.centerX + Math.cos(data.angle) * data.radius;
        positions[i * 3 + 1] = data.centerY + Math.sin(data.angle) * data.radius;
        positions[i * 3 + 2] = data.centerZ + Math.sin(data.angle * 0.5) * 5;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Gentle rotation of particle field
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
