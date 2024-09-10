import React, { useState } from 'react';
import Box3D from './components/Box3D';
import BoxForm from './components/BoxForm';
import './App.css'; // Импортируем стили
import { Canvas } from '@react-three/fiber';

const App: React.FC = () => {
  const [vertices, setVertices] = useState<number[]>([]);

  return (
    <div className="app-container">
      <div className="canvas-container">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box3D vertices={vertices} />
        </Canvas>
      </div>
      <div className="form-container">
        <BoxForm onSubmit={setVertices} />
      </div>
    </div>
  );
};

export default App;
