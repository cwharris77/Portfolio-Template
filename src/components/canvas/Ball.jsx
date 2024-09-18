import {
  Decal,
  Float,
  Html,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import PropTypes from 'prop-types';
import React, { Suspense, useState } from 'react';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }} style={{ overflow: 'visible' }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} position0={0} />
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Ball imgUrl={icon} />
          {hovered && (
            <Html>
              <div className="technology-label">
                {name}
              </div>
            </Html>
          )}
        </group>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default BallCanvas;
