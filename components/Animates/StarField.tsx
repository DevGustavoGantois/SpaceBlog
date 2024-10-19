// components/StarField.tsx
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useRef, useState } from 'react';
import * as THREE from 'three';

function Stars() {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000 * 3); 
    for (let i = 0; i < 5000; i++) {
      const x = (Math.random() - 0.5) * 500; 
      const y = (Math.random() - 0.5) * 500; 
      const z = (Math.random() - 0.5) * 500; 
      positions.set([x, y, z], i * 3);
    }
    return positions;
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="white" size={0.5} sizeAttenuation depthWrite={false} />
    </Points>
  );
}

const StarField: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
  );
};

export default StarField;
