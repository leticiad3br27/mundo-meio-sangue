'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesProfecias() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: '#0a2e1a' },
        particles: {
          number: {
            value: 40,
            density: { enable: true, area: 800 },
          },
          color: { 
            value: ["#a8a8a8", "#d0d0d0", "#f0f0f0"], // Tons de cinza para fumaça
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: { min: 0.1, max: 0.5 }, // Mais transparente
            random: true,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false
            }
          },
          size: {
            value: { min: 10, max: 80 }, // Partículas maiores
            random: true,
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: { min: 0.5, max: 1.5 }, // Movimento mais lento
            direction: "top", // Direção para cima
            random: true,
            straight: false,
            outModes: "destroy", // Destrói partículas ao sair da tela
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            },
            warp: true,
          },
          wobble: {
            enable: true,
            distance: 5,
            speed: 3
          },
          life: {
            duration: {
              value: 10 // Tempo de vida mais longo
            },
            count: 1
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false
            },
            onclick: {
              enable: false
            },
            resize: true
          }
        },
        detectRetina: true,
        emitters: {
          direction: "top",
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.1
          },
          rate: {
            delay: 0.5,
            quantity: 5
          },
          size: {
            width: 100,
            height: 10
          },
          position: {
            x: 50,
            y: 100
          }
        }
      }}
    />
  );
}