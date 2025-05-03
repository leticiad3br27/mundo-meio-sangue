'use client';
import React, { useState } from 'react';
import styles from './page.module.css';
import Header from '../../components/Header';
import ParticlesBackground from '../../components/ParticlesBRED';

const personagens = [

  {
      nome: "Nico di Angelo",
      descricao: "Filho de Hades, Nico é um semideus que tem a habilidade de controlar as sombras e os mortos.",
      imagem: "/imagens/nico.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Annabeth Chase",
      descricao: "Filha de Atena, Annabeth é uma estrategista brilhante e uma das principais heroínas da série.",
      imagem: "/imagens/annabeth.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Percy Jackson",
      descricao: "Filho de Poseidon, Percy é o protagonista da série e possui habilidades relacionadas à água.",
      imagem: "/imagens/percy.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Clarisse La Rue",
      descricao: "Filha de Ares, Clarisse é uma semideusa forte e corajosa, conhecida por sua bravura em batalha.",
      imagem: "/imagens/clarisse.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Katie Gardner",
      descricao: "Filha de Deméter, Katie tem a habilidade de controlar plantas e é uma semideusa dedicada.",
      imagem: "/imagens/katie.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Silena Beauregard",
      descricao: "Filha de Afrodite, Silena é conhecida por sua beleza e coragem, além de ser uma líder entre os semideuses.",
      imagem: "/imagens/silena.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Will Solace",
      descricao: "Filho de Apolo, Will é um curandeiro talentoso e um dos semideuses mais importantes do Acampamento Meio-Sangue.",
      imagem: "/imagens/will.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Michael Yew",
      descricao: "Filho de Apolo, Michael é um arqueiro habilidoso e um dos semideuses que luta contra as forças do mal.",
      imagem: "/imagens/michael.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Connor Stoll",
      descricao: "Filho de Hermes, Connor é um dos gêmeos Stoll e é conhecido por suas travessuras e habilidades de ladrão.",
      imagem: "/imagens/connor.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Travis Stoll",
      descricao: "Filho de Hermes, Travis é o irmão gêmeo de Connor e também é conhecido por suas travessuras.",
      imagem: "/imagens/travis.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Charles Beckendorf",
      descricao: "Filho de Hefesto, Charles é um habilidoso ferreiro e um dos semideuses mais corajosos.",
      imagem: "/imagens/charles.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Chris Rodriguez",
      descricao: "Filho de Hermes, Chris é um semideus que se destaca por sua lealdade e coragem.",
      imagem: "/imagens/chris.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Ethan Nakamura",
      descricao: "Filho de Érebo, Ethan é um semideus que se tornou um antagonista em algumas histórias.",
      imagem: "/imagens/ethan.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Alabaster C. Torrington",
      descricao: "Filho de Héstia, Alabaster é um semideus que possui habilidades únicas relacionadas ao fogo.",
      imagem: "/imagens/alabaster.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Sherman Yang",
      descricao: "Filho de Hefesto, Sherman é um semideus que se destaca por suas habilidades em tecnologia.",
      imagem: "/imagens/sherman.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Harley",
      descricao: "Filho de Hefesto, Harley é um semideus grego de oito anos.",
      imagem: "/imagens/harley.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Clovis",
      descricao: "Filho de Morfeu, Clovis é um semideus que tem a habilidade de controlar os sonhos.",
      imagem: "/imagens/clovis.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Butch",
      descricao: "Filho de Ares, Butch é um semideus forte e leal, conhecido por sua bravura em combate.",
      imagem: "/imagens/butch.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Drew Tanaka",
      descricao: "Filha de Afrodite, Drew é uma semideusa que possui habilidades de persuasão e charme.",
      imagem: "/imagens/drew.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Nyssa",
      descricao: "Filha de Héstia, Nyssa é uma semideusa que se destaca por suas habilidades em controle de fogo.",
      imagem: "/imagens/nyssa.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Rachel Elizabeth Dare",
      descricao: "Uma mortal com a habilidade de ver o futuro, Rachel se torna uma aliada importante dos semideuses.",
      imagem: "/imagens/rachel.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Bianca Di Angelo",
      descricao: "Filha de Hades, Bianca é uma semideusa que faz parte da história de Nico di Angelo.",
      imagem: "/imagens/bianca.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Thalia Grace",
      descricao: "Filha de Zeus, Thalia é uma semideusa forte e corajosa, conhecida por sua lealdade.",
      imagem: "/imagens/thalia.jpg",
      mitologia: "Grega"
  },
  {
      nome: "Jason Grace",
      descricao: "Filho de Júpiter, Jason é um semideus que possui habilidades de controle do clima e é um líder nato.",
      imagem: "/imagens/jason.jpg",
      mitologia: "Romana"
  },
  {
      nome: "Reyna Avila Ramírez-Arellano",
      descricao: "Filha de Marte, Reyna é uma semideusa forte e uma líder respeitada no Acampamento Júpiter.",
      imagem: "/imagens/reyna.jpg",
      mitologia: "Romana"
  },
  {
      nome: "Rá",
      descricao: "Deus do sol egípcio, Rá é considerado o criador do mundo e é frequentemente associado à luz e à vida.",
      imagem: "/imagens/ra.jpg",
      mitologia: "Egípcia"
  },
  {
      nome: "Osíris",
      descricao: "Deus da vida após a morte e da ressurreição, Osíris é uma figura central na mitologia egípcia.",
      imagem: "/imagens/osiris.jpg",
      mitologia: "Egípcia"
  },
  {
      nome: "Ísis",
      descricao: "Deusa da maternidade e da fertilidade, Ísis é conhecida por sua devoção a Osíris e por seus poderes mágicos.",
      imagem: "/imagens/isis.jpg",
      mitologia: "Egípcia"
  },
  {
      nome: "Hórus",
      descricao: "Deus do céu e da guerra, Hórus é frequentemente representado como um falcão e é um símbolo de proteção.",
      imagem: "/imagens/horus.jpg",
      mitologia: "Egípcia"
  },
  {
      nome: "Anúbis",
      descricao: "Deus dos mortos e da mumificação, Anúbis é representado com a cabeça de um chacal e é o guardião das tumbas.",
      imagem: "/imagens/anubis.jpg",
      mitologia: "Egípcia"
  },
  {
    nome: "Bastet",
    descricao: "Deusa da proteção, do lar e da fertilidade, Bastet é frequentemente associada a gatos e é uma figura maternal.",
    imagem: "/imagens/bastet.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Set",
    descricao: "Deus do caos e da desordem, Set é frequentemente visto como um antagonista na mitologia egípcia.",
    imagem: "/imagens/set.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Tot",
    descricao: "Deus da sabedoria e da escrita, Tot é frequentemente representado como um homem com cabeça de íbis.",
    imagem: "/imagens/tot.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Khonsu",
    descricao: "Deus da lua, Khonsu é associado ao tempo e à proteção dos viajantes.",
    imagem: "/imagens/khonsu.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Ptah",
    descricao: "Deus da criação e da arquitetura, Ptah é considerado o patrono dos artesãos e dos artistas.",
    imagem: "/imagens/ptah.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Sobek",
    descricao: "Deus crocodilo, Sobek é associado à fertilidade e à proteção das águas.",
    imagem: "/imagens/sobek.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Apófis",
    descricao: "Serpente do caos, Apófis é o inimigo de Rá e representa a escuridão e a destruição.",
    imagem: "/imagens/apofis.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Bes",
    descricao: "Deus da proteção e da alegria, Bes é frequentemente representado como um anão e é associado à música e à dança.",
    imagem: "/imagens/bes.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Neftis",
    descricao: "Deusa da noite e da proteção, Neftis é irmã de Ísis e é associada ao luto e à morte.",
    imagem: "/imagens/neftis.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Setne",
    descricao: "Um personagem da mitologia egípcia, Setne é conhecido por suas aventuras e por seu conhecimento mágico.",
    imagem: "/imagens/setne.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Carter Kane",
    descricao: "Um dos protagonistas de 'As Crônicas dos Kane', Carter é um mago que luta contra as forças do mal.",
    imagem: "/imagens/carter.jpg",
    mitologia: "Egípcia"
},
{
    nome: "Walt Stone",
    descricao: "Um personagem importante em 'As Crônicas dos Kane', Walt é um mago que tem uma conexão especial com a morte.",
    imagem: "/imagens/walt.jpg",
    mitologia: "Egípcia"
},
{   nome:"Paulo Montes",
    descricao:"Paulo Montes é um semideus grego, filho de Hebe. Ele é brasileiro e alega falar apenas português, porém entende inglês fluentemente.",
    image:"/imagens/paulo.jpg",
    mitologia:"grega"
}

];

export default function Page() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchMitologia, setSearchMitologia] = useState('');

  const filteredPersonagens = personagens.filter((p) => {
    const nomeMatch = p.nome.toLowerCase().includes(searchTerm.toLowerCase());
    const mitologiaMatch = p.mitologia.toLowerCase().includes(searchMitologia.toLowerCase());
    return nomeMatch && mitologiaMatch;
  });

  return (
    <div className={styles.container}>
      <Header />
      <ParticlesBackground />
      <h1 className={styles.title}>Personagens</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar por nome"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
          aria-label="Buscar por nome"
        />
        <input
          type="text"
          placeholder="Buscar por mitologia (ex: Grega, Romana, Egípcia)"
          value={searchMitologia}
          onChange={(e) => setSearchMitologia(e.target.value)}
          className={styles.searchInput}
          aria-label="Buscar por mitologia"
        />
      </div>
      <div className={styles.grid}>
        {filteredPersonagens.length > 0 ? (
          filteredPersonagens.map((p, index) => (
            <div key={index} className={styles.card} tabIndex={0}>
              <img src={p.imagem} alt={p.nome} className={styles.image} />
              <h2 className={styles.name}>{p.nome}</h2>
              <p className={styles.mitologia}>{p.mitologia}</p>
              <p className={styles.descricao}>{p.descricao}</p>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>Nenhum personagem encontrado.</p>
        )}
      </div>
    </div>
  );
}

