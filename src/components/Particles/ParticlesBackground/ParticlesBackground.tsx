"use client"

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from "tsparticles-engine";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine : Engine): Promise<void> => {

        // this adds the preset to tsParticles, you can safely use the
        await loadTrianglesPreset(engine);
  }, []);

  const options = {
    preset: "triangles",
    fullScreen: {
        enable: false,
        zIndex: -1
      },
  };

  return (
    <div id='particle-background' className='flex'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={options}
        height='100vh'
        width='100vw'
      ></Particles>
    </div>
  );
};

export default ParticleBackground;