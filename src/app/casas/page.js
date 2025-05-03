'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Header from '../../components/Header';
import ParticlesBackground from '../../components/paticlesFolhas';

const pessoasImportantes = {
  1: ["Jason Grace", "Thalia Grace"],
  2: ["Hera (como figura divina)"],
  3: ["Percy Jackson", "Tyson"],
  4: ["Katie Gardner"],
  5: ["Clarisse La Rue"],
  6: ["Annabeth Chase", "Malcolm"],
  7: ["Will Solace", "Michael Yew", "Lee Fletcher"],
  8: ["Zoe Nightshade", "Thalia (como caçadora)"],
  9: ["Leo Valdez", "Harley"],
  10: ["Drew Tanaka", "Silena Beauregard"],
  11: ["Luke Castellan", "Connor Stoll", "Travis Stoll"],
  12: ["Pollux", "Castor"],
  13: ["Nico di Angelo", "Bianca di Angelo"],
  14: ["Butch (filho de Íris)"],
  15: ["Clovis"],
  16: ["Ethan Nakamura"],
  17: ["Victoria (Nike, deusa da vitória)"],
  18: [],
  19: ["Ventus (criaturas de Éolo)"],
  20: [],
  21: [],
  22: [],
  23: [],
  24: ["Janus (deus presente em decisões importantes)"],
  25: ["Grover Underwood", "Pan (como figura mitológica)"],
  26: ["Charles Beckendorf"],
  27: ["Chris Rodriguez"],
  28: ["Hazel Levesque"],
  29: ["Austin", "Semideuses não reclamados"],
};

const chales = [
  { id: 1, nome: "Chalé 1: Zeus", imagem: "/imagens/zeus.jpg", descricao: "Lar do deus dos céus e trovão." },
  { id: 2, nome: "Chalé 2: Hera", imagem: "/imagens/hera.jpg", descricao: "Dedicado à deusa do casamento." },
  { id: 3, nome: "Chalé 3: Poseidon", imagem: "/imagens/poseidon.jpg", descricao: "Residência majestosa à beira do lago." },
  { id: 4, nome: "Chalé 4: Deméter", imagem: "/imagens/demeter.jpg", descricao: "Cercado por plantas e flores." },
  { id: 5, nome: "Chalé 5: Ares", imagem: "/imagens/ares.jpg", descricao: "Preparado para a guerra." },
  { id: 6, nome: "Chalé 6: Atena", imagem: "/imagens/atena.jpg", descricao: "Repleto de livros e mapas." },
  { id: 7, nome: "Chalé 7: Apolo", imagem: "/imagens/apolo.jpg", descricao: "Iluminado, com instrumentos musicais." },
  { id: 8, nome: "Chalé 8: Ártemis", imagem: "/imagens/artemis.jpg", descricao: "Usado pelas Caçadoras da deusa." },
  { id: 9, nome: "Chalé 9: Hefesto", imagem: "/imagens/hefesto.jpg", descricao: "Cheio de ferramentas e invenções." },
  { id: 10, nome: "Chalé 10: Afrodite", imagem: "/imagens/afrodite.jpg", descricao: "Decorado com flores e espelhos." },
  { id: 11, nome: "Chalé 11: Hermes", imagem: "/imagens/hermes.jpg", descricao: "Pequeno e cheio de passagens secretas." },
  { id: 12, nome: "Chalé 12: Dionísio", imagem: "/imagens/dionisio.jpg", descricao: "Colorido, com videiras e alegria." },
  { id: 13, nome: "Chalé 13: Hades", imagem: "/imagens/hades.jpg", descricao: "Sombrio, perto da sombra do acampamento." },
  { id: 14, nome: "Chalé 14: Íris", imagem: "/imagens/iris.jpg", descricao: "Colorido como um arco-íris." },
  { id: 15, nome: "Chalé 15: Hipnos", imagem: "/imagens/hypnos.jpg", descricao: "Sereno e calmo para descanso e sonhos." },
  { id: 16, nome: "Chalé 16: Nêmesis", imagem: "/imagens/nemesis.jpg", descricao: "Com atmosfera de justiça e vingança." },
  { id: 17, nome: "Chalé 17: Nike", imagem: "/imagens/nike.jpg", descricao: "Repleto de energia e vitórias." },
  { id: 18, nome: "Chalé 18: Hebe", imagem: "/imagens/hebe.jpg", descricao: "Juventude eterna em cada detalhe." },
  { id: 19, nome: "Chalé 19: Tique", imagem: "/imagens/tique.jpg", descricao: "Cheio de símbolos de sorte." },
  { id: 20, nome: "Chalé 20: Hécate", imagem: "/imagens/hecate.jpg", descricao: "Misterioso, com símbolos lunares." },
  { id: 21, nome: "Chalé 21: Éolo", imagem: "/imagens/eolo.jpg", descricao: "Ventilado e leve como o ar." },
  { id: 22, nome: "Chalé 22: Perséfone", imagem: "/imagens/persefone.jpg", descricao: "Florido na superfície, sombrio no subsolo." },
  { id: 23, nome: "Chalé 23: Jano", imagem: "/imagens/janus.jpg", descricao: "Com duas entradas e arquitetura simétrica." },
  { id: 24, nome: "Chalé 24: Melinoe", imagem: "/imagens/melinoe.jpg", descricao: "Fantasmal, com aura de mistério." },
  { id: 25, nome: "Chalé 25: Macária", imagem: "/imagens/macaria.jpg", descricao: "Pacífico, dedicado à boa morte." },
  { id: 26, nome: "Chalé 26: Tanatos", imagem: "/imagens/tanatos.jpg", descricao: "Silencioso, guardião do fim." },
  { id: 27, nome: "Chalé 27: Nix", imagem: "/imagens/nix.jpg", descricao: "Escuridão e estrelas, mãe da noite." },
  { id: 28, nome: "Chalé 28: Eros", imagem: "/imagens/eros.jpg", descricao: "Intenso, dedicado ao amor primitivo." },
  { id: 29, nome: "Chalé 29: Eos", imagem: "/imagens/eos.jpg", descricao: "Aurora em cada raio de luz." },
];

export default function Chales() {
  const [chaleSelecionado, setChaleSelecionado] = useState(null);

  const aoClicarChale = (id) => {
    setChaleSelecionado(chaleSelecionado === id ? null : id);
  };

  return (
    <div className={styles.container}>
      <ParticlesBackground />
      <Header />
      <h1 className={styles.title}>Chalés do Acampamento Meio-Sangue</h1>
      <div className={styles.chalesList}>
        {chales.map((chale) => (
          <div key={chale.id} className={styles.card} onClick={() => aoClicarChale(chale.id)}>
            <img src={chale.imagem} alt={chale.nome} className={styles.image} />
            <div className={styles.content}>
              <h2 className={styles.nome}>{chale.nome}</h2>
              <p className={styles.descricao}>{chale.descricao}</p>
              {chaleSelecionado === chale.id && pessoasImportantes[chale.id] && (
                <div className={styles.pessoas}>
                  <h3>Personagens importantes:</h3>
                  <ul>
                    {pessoasImportantes[chale.id].map((pessoa, index) => (
                      <li key={index}>{pessoa}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
