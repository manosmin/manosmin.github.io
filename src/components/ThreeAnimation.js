// src/components/ThreeAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeAnimation = ({ darkMode }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    const backgroundColor = darkMode ? 0x111827 : 0xf3f4f6;
    const cubeColor = 0x1E3A8A;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    mountNode.appendChild(renderer.domElement);

    const cubeArray = [];
    const velocityArray = [];
    const cubeCount = 10;
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const velocityScale = 0.02; 

    for (let i = 0; i < cubeCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: cubeColor,
        transparent: true,
        opacity: 0.25
      });
      const cube = new THREE.Mesh(geometry, material);

      const maxX = window.innerWidth / 100;
      const maxY = window.innerHeight / 100;

      cube.position.set(
        (Math.random() * maxX) - maxX / 2,
        (Math.random() * maxY) - maxY / 2,
        (Math.random() - 0.5) * 20
      );

      // Adjust velocity with the scale factor
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * velocityScale,
        (Math.random() - 0.5) * velocityScale,
        (Math.random() - 0.5) * velocityScale
      );

      scene.add(cube);
      cubeArray.push(cube);
      velocityArray.push(velocity);
    }

    camera.position.z = 10;

    const animate = function () {
      requestAnimationFrame(animate);

      cubeArray.forEach((cube, index) => {
        cube.position.add(velocityArray[index]);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        if (cube.position.x > window.innerWidth / 100 / 2 || cube.position.x < -window.innerWidth / 100 / 2) {
          velocityArray[index].x *= -1;
        }
        if (cube.position.y > window.innerHeight / 100 / 2 || cube.position.y < -window.innerHeight / 100 / 2) {
          velocityArray[index].y *= -1;
        }
        if (cube.position.z > 10 || cube.position.z < -10) {
          velocityArray[index].z *= -1;
        }
      });

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
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
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
