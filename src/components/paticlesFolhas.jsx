'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackgroundFolhas() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#81c7a9' },
        particles: {
          number: {
            value: 25,
            density: { enable: true, area: 800 },
          },
          shape: {
            type: 'image',
            image: {
              src: 'imagens/folha.png', 
              width: 32,
              height: 32,
            },
          },
          opacity: { value: 0.7 },
          size: {
            value: { min: 10, max: 20 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 10,
              sync: false,
            },
          },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'bottom',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}
