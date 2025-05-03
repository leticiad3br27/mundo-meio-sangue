'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#f5e29f' }, // tom claro de pergaminho
        particles: {
          number: {
            value: 20, // Reduzi a quantidade pois imagens são mais pesadas
            density: { enable: true, area: 800 },
          },
          color: { value: '#ffffff' },
          shape: {
            type: 'image',
            images: [
              {
                src: '/imagens/centauro.png', // Substitua pelo caminho da sua imagem
                width: 20,
                height: 20
              },
              {
                src: '/imagens/centauro2.png', // Adicione diferentes imagens para variedade
                width: 15,
                height: 15
              },
              {
                src: '/imagens/centauro3.png', // Para efeito de neve
                width: 30,
                height: 30
              }
            ]
          },
          opacity: {
            value: 0.7,
            random: true,
          },
          size: {
            value: { min: 10, max: 20 }, // Tamanho maior para as imagens
            random: true
          },
          move: {
            enable: true,
            speed: 1, // Velocidade um pouco maior
            direction: 'bottom', // Faz as partículas caírem
            random: true,
            straight: false,
            outModes: { default: 'out' },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          },
          rotate: {
            value: {
              min: 0,
              max: 360
            },
            animation: {
              enable: true,
              speed: 30,
              sync: false
            }
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: 5
          }
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