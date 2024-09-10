import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry } from "three";

interface Box3DProps {
  vertices: number[];
}

const Box3D: React.FC<Box3DProps> = ({ vertices }) => {
  const geometryRef = useRef<BufferGeometry>(null);

  // Проверка массива вершин
  if (vertices.length === 0) {
    console.warn("Vertices array is empty");
  } else {
    console.log("Vertices array:", vertices);
  }

  useFrame(() => {
    if (geometryRef.current) {
      geometryRef.current.computeVertexNormals();
    }
  });

  const verticesArray = new Float32Array(vertices);

  return (
    <mesh>
      {vertices.length > 0 ? (
        <bufferGeometry ref={geometryRef}>
          <bufferAttribute
            attach="attributes-position"
            count={verticesArray.length / 3}
            array={verticesArray}
            itemSize={3}
          />
        </bufferGeometry>
      ) : (
        // Тестовый объект для проверки рендеринга
        <boxGeometry args={[1, 1, 1]} />
      )}
      <meshStandardMaterial color={vertices.length > 0 ? "orange" : "red"} />
    </mesh>
  );
};

export default Box3D;
