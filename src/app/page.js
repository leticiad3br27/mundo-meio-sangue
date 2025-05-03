'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ParticlesBackground from '../components/ParticlesBackground';
import Link from 'next/link'; // Importando o Link do Next.js
import styles from './page.module.css';

const slides = [
  {
    id: 1,
    title: 'Bem-vindo ao Mundo Meio-Sangue',
    description: 'Explore o mundo dos semideuses',
    image: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
  },
  {
    id: 2,
    title: 'A Batalha do Olimpo',
    description: 'Reviva os momentos decisivos que mudaram o destino dos deuses',
    image: 'https://images.pexels.com/photos/220419/pexels-photo-220419.jpeg',
  },
  {
    id: 3,
    title: 'Descubra sua Herança',
    description: 'Descubra quem é seu pai ou mãe olimpiano com nosso quiz',
    image: 'https://images.pexels.com/photos/327482/pexels-photo-327482.jpeg',
  },
];

export default function Home() {
  const [slideAtual, setSlideAtual] = useState(0);
  const opcoesEnquete = ['Atena', 'Ares', 'Poseidon', 'Apolo'];
  const [votos, setVotos] = useState(Array(opcoesEnquete.length).fill(0));
  const [votou, setVotou] = useState(false);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSlideAtual((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  const mudarSlide = (index) => setSlideAtual(index);

  const votar = (index) => {
    if (votou) return;
    const novosVotos = [...votos];
    novosVotos[index] += 1;
    setVotos(novosVotos);
    setVotou(true);
  };

  return (
    <>
      <Header />
      <ParticlesBackground />

      <main className={styles.main}>
        {/* Slider */}
        <section className={styles.slider}>
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === slideAtual ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.overlay} />
              <div className={styles.slideText}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
          <div className={styles.controls}>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`${styles.controlButton} ${index === slideAtual ? styles.activeButton : ''}`}
                onClick={() => mudarSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Seções estilizadas */}
        <section className={styles.card}>
          <h2>Batalha do Olimpo</h2>
          <p>Reviva o momento em que os heróis enfrentaram os Titãs na batalha final pelo Olimpo.</p>
          <Link href="/batalha-do-olimpio">
            <button className={styles.cardButton}>Saiba Mais</button>
          </Link>
        </section>

        <section className={styles.card}>
          <h2>Quiz do Acampamento Meio-Sangue</h2>
          <p>Descubra qual é o seu pai/mãe olimpiano!</p>
          <Link href="/reclamacao">
            <button className={styles.cardButton}>Descobrir</button>
          </Link>
        </section>

        <section className={styles.card}>
          <h2>Experiências Interativas</h2>
          <ul>
            <li>Criador de retrato de semideus</li>
            <li>Teste de habilidades de combate</li>
            <li>Crie sua Profecia</li>
          </ul>
          <Link href="/experiencias">
            <button className={styles.cardButton}>Explorar Experiências</button>
          </Link>
        </section>

        <section className={styles.card}>
          <h2>Jogos e Passatempos</h2>
          <ul>
            <li>Quiz: “Qual arma dos deuses você usaria?”</li>
            <li>Puzzle: Monte o mapa do Acampamento Meio-Sangue</li>
          </ul>
          <Link href="/jogos">
            <button className={styles.cardButton}>Ver Jogos</button>
          </Link>
        </section>

        <section className={styles.card}>
          <h2>Conteúdo Editorial</h2>
          <h3>Últimas notícias da série da Disney+</h3>
          <p>Fique por dentro das novidades do universo Percy Jackson na TV.</p>
          <h3>Artigos Especiais</h3>
          <ul>
            <li>“Os Deuses mais injustiçados”</li>
            <li>“Melhores Batalhas da Saga”</li>
          </ul>
          <Link href="/artigos">
            <button className={styles.cardButton}>Leia os Artigos</button>
          </Link>
        </section>

        <section className={styles.card}>
          <h2>Enquete</h2>
          <p>Qual deus você escolheria como mentor?</p>
          <ul>
            {opcoesEnquete.map((opcao, index) => (
              <li key={index}>
                <button onClick={() => votar(index)} disabled={votou}>
                  {opcao}
                </button>
                {votou && <span> — {votos[index]} voto(s)</span>}
              </li>
            ))}
          </ul>
          {votou && <p>Obrigado por votar!</p>}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.logoFooter}>Mundo Meio-Sangue</div>
        <ul className={styles.ul}>
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Contato</li>
        </ul>
        <div className={styles.redesSociais}>
          <span>YouTube</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
        <p>© Mundo Meio-Sangue 2025 - Projeto fictício inspirado em Percy Jackson</p>
      </footer>
    </>
  );
}