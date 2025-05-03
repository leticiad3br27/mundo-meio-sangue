'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // usar 'slim' é mais leve e compatível
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#000000' }, // Fundo preto
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: { value: '#ffffff' }, // Partículas brancas
          shape: { type: 'circle' },
          opacity: { value: 0.5 }, // Leve transparência para as partículas
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: 0.6,
            direction: 'none',
            random: true, // Movimentação aleatória para criar um efeito de céu
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
