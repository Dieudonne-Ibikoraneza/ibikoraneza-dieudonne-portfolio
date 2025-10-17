import { useEffect, useRef } from "react";
import * as THREE from "three";

export const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0x54302c,
      size: 1.5,
      transparent: true,
      opacity: 0.8,
    });

    const starsVertices = [];
    for (let i = 0; i < 3000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Create accent particles (coral colored)
    const accentGeometry = new THREE.BufferGeometry();
    const accentMaterial = new THREE.PointsMaterial({
      color: 0xff6b6b,
      size: 2,
      transparent: true,
      opacity: 0.6,
    });

    const accentVertices = [];
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 1000;
      accentVertices.push(x, y, z);
    }

    accentGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(accentVertices, 3)
    );

    const accentParticles = new THREE.Points(accentGeometry, accentMaterial);
    scene.add(accentParticles);

    camera.position.z = 500;

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      stars.rotation.y += 0.0002;
      stars.rotation.x += 0.0001;

      accentParticles.rotation.y -= 0.0003;
      accentParticles.rotation.x += 0.0002;

      // Mouse interaction
      camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 50 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      accentGeometry.dispose();
      accentMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at bottom, #0a0a0a 0%, #000000 100%)",
      }}
    />
  );
};
