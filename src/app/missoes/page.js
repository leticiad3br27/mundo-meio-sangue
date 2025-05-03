'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import ParticlesBackground from '../../components/ParticlesBackgroundquiron';
import styles from './page.module.css';

export default function Page() {
  const missoes = [
    {
      titulo: 'Missão 1: A Porta de Bronze',
      descricao: 'Você encontrou uma porta antiga escondida atrás da cachoeira do acampamento. No topo, está inscrita uma única palavra: “ἀλήθεια”. Traduza-a corretamente para abrir a porta:',
      resposta: 'verdade',
      sucesso: 'A porta range e se abre lentamente, revelando uma passagem secreta...',
    },
    {
      titulo: 'Missão 2: O Enigma do Labirinto',
      descricao: 'Sou algo que quebra sem ser tocado. O que sou eu?',
      resposta: 'silencio',
      sucesso: 'O silêncio ecoa... e uma nova escada de pedra surge no chão.',
    },
    {
      titulo: 'Missão 3: A Chama de Héstia',
      descricao: 'Uma chama azul dança no centro. Diga o nome da deusa do lar para acalmá-la.',
      resposta: 'hestia',
      sucesso: 'A chama se aquece em dourado e revela um medalhão antigo.',
    },
    {
      titulo: 'Missão 4: Sopro de Éolo',
      descricao: 'O vento sussurra: "Não posso ser visto, mas posso destruir montanhas." O que sou?',
      resposta: 'vento',
      sucesso: 'As folhas giram em volta de você e revelam um novo caminho.',
    },
    {
      titulo: 'Missão 5: Poço de Narciso',
      descricao: 'Um espelho d’água reflete sua imagem. Ele pergunta: "Qual herói se apaixonou por si mesmo?"',
      resposta: 'narciso',
      sucesso: 'A água se parte, revelando uma escada de pedras submersa.',
    },
    {
      titulo: 'Missão 6: A Esfinge Esquecida',
      descricao: 'Qual criatura anda com quatro patas pela manhã, duas ao meio-dia e três à noite?',
      resposta: 'homem',
      sucesso: 'A esfinge sorri em silêncio e desaparece.',
    },
    {
      titulo: 'Missão 7: Lira de Orfeu',
      descricao: 'Complete: "A música pode amansar até os ___."',
      resposta: 'infernos',
      sucesso: 'A melodia suave quebra correntes invisíveis no ar.',
    },
    {
      titulo: 'Missão 8: O Oráculo Silenciado',
      descricao: 'Quem fala sem boca e escuta sem ouvidos?',
      resposta: 'eco',
      sucesso: 'Sua voz se repete ao longe, e uma porta se abre com estalo.',
    },
    {
      titulo: 'Missão 9: Olhos de Argos',
      descricao: 'Quantos olhos possuía Argos, o servo vigilante de Hera?',
      resposta: 'cem',
      sucesso: 'Uma estátua pisca e revela uma chave dourada.',
    },
    {
      titulo: 'Missão 10: Tecido das Moiras',
      descricao: 'Qual das três moiras corta o fio da vida?',
      resposta: 'atropos',
      sucesso: 'O fio se enrola e desaparece como névoa.',
    },
    {
      titulo: 'Missão 11: Tesouro de Hermes',
      descricao: 'Qual deus tem asas nos pés?',
      resposta: 'hermes',
      sucesso: 'Você sente-se mais leve... mais rápido.',
    },
    {
      titulo: 'Missão 12: Medusa Encantada',
      descricao: 'Para derrotá-la, Perseu usou um objeto espelhado. O que era?',
      resposta: 'escudo',
      sucesso: 'Você vê a cabeça da Medusa petrificada, imóvel.',
    },
    {
      titulo: 'Missão 13: Códigos de Dédalo',
      descricao: 'Qual é o nome do arquiteto do Labirinto?',
      resposta: 'dedalo',
      sucesso: 'As paredes do labirinto se ajustam e formam uma seta brilhante.',
    },
    {
      titulo: 'Missão 14: Filho de Poseidon',
      descricao: 'Quem é o meio-sangue filho de Poseidon com olhos cor de mar?',
      resposta: 'percy',
      sucesso: 'Ondas de água salgada dançam ao seu redor.',
    },
    {
      titulo: 'Missão 15: Voz da Sibila',
      descricao: 'Como se chama o livro profético romano que guiava os imperadores?',
      resposta: 'sibila',
      sucesso: 'O pergaminho brilha e se desfaz em pó de ouro.',
    },
    {
      titulo: 'Missão 16: Armadilha de Hefesto',
      descricao: 'Quem forjou o raio-mestre de Zeus?',
      resposta: 'hefesto',
      sucesso: 'As correntes de metal se abrem com faíscas.',
    },
    {
      titulo: 'Missão 17: Dança de Apolo',
      descricao: 'Deus da luz, poesia e música. Quem é ele?',
      resposta: 'apolo',
      sucesso: 'O chão vibra com luz dourada e suave.',
    },
    {
      titulo: 'Missão 18: Chave de Pandora',
      descricao: 'O que restou na caixa de Pandora?',
      resposta: 'esperanca',
      sucesso: 'Uma luz tênue sai de um baú antigo.',
    },
    {
      titulo: 'Missão 19: Garras de Quimera',
      descricao: 'Quais três animais formam a Quimera?',
      resposta: 'leao cabra serpente',
      sucesso: 'A fera recua com seu segredo revelado.',
    },
    {
      titulo: 'Missão 20: Papiro de Atena',
      descricao: 'Deusa da sabedoria e estratégia. Quem é ela?',
      resposta: 'atena',
      sucesso: 'Um estandarte com uma coruja flutua no ar.',
    },
    {
      titulo: 'Missão 21: Tridente Sombrio',
      descricao: 'Qual é a arma de Poseidon?',
      resposta: 'tridente',
      sucesso: 'As águas estremecem e recuam respeitosamente.',
    },
    {
      titulo: 'Missão 22: Nuvem de Zeus',
      descricao: 'O que Zeus usou para controlar o céu?',
      resposta: 'raio',
      sucesso: 'Um trovão ressoa acima de sua cabeça.',
    },
    {
      titulo: 'Missão 23: Sangue de Medusa',
      descricao: 'O que nasceu do sangue de Medusa ao tocar o chão?',
      resposta: 'pegaso',
      sucesso: 'Um relincho distante ecoa no céu nublado.',
    },
    {
      titulo: 'Missão 24: Cripta de Hades',
      descricao: 'Deus do submundo. Quem é ele?',
      resposta: 'hades',
      sucesso: 'A escuridão parece lhe respeitar.',
    },
    {
      titulo: 'Missão 25: Vinho de Dionísio',
      descricao: 'Deus da festa e do vinho?',
      resposta: 'dionisio',
      sucesso: 'Videiras crescem sob seus pés.',
    },
    {
      titulo: 'Missão 26: Guardiã do Arco-Íris',
      descricao: 'Quem carrega mensagens por arco-íris?',
      resposta: 'iris',
      sucesso: 'Um facho colorido liga dois mundos por segundos.',
    },
    {
      titulo: 'Missão 27: Cavalo de Troia',
      descricao: 'Qual presente os gregos deixaram para os troianos?',
      resposta: 'cavalo',
      sucesso: 'Você ouve o ranger de madeira vindo de trás.',
    },
    {
      titulo: 'Missão 28: Cetro de Ártemis',
      descricao: 'Deusa da caça e da lua?',
      resposta: 'artemis',
      sucesso: 'Uma flecha brilha no céu escuro.',
    },
    {
      titulo: 'Missão 29: Guardião do Olimpo',
      descricao: 'Quem é o rei dos deuses?',
      resposta: 'zeus',
      sucesso: 'Um trovão responde em aprovação.',
    },
    {
      titulo: 'Missão 30: O Último Enigma',
      descricao: '“Sou a essência de cada missão, movo todos os heróis. Não sou tangível, mas sem mim nada se inicia.” Quem sou?',
      resposta: 'coragem',
      sucesso: 'A última chama se acende... e você conclui sua jornada como herói do Olimpo!',
    },
  ]; const [indiceAtual, setIndiceAtual] = useState(0);
  const [entrada, setEntrada] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const missaoAtual = missoes[indiceAtual];

  const verificarResposta = () => {
    setIsLoading(true);
    const entradaNormalizada = entrada.trim().toLowerCase();

    if (entradaNormalizada === missaoAtual.resposta.toLowerCase()) {
      setMensagem(missaoAtual.sucesso);
      setTimeout(() => {
        setIndiceAtual((prev) => Math.min(prev + 1, missoes.length - 1));
        setMensagem('');
        setEntrada('');
        setIsLoading(false);
      }, 2000);
    } else {
      setMensagem('Resposta incorreta. Tente novamente!');
      setIsLoading(false);
    }
  };

  return (
    <>
      <ParticlesBackground />
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Missões dos heróis</h1>

        <div className={styles.missao}>
          <h2>{missaoAtual.titulo}</h2>
          <p>{missaoAtual.descricao}</p>
          <input
            type="text"
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            placeholder="Digite sua resposta"
            className={styles.input}
            aria-label="Resposta da missão"
          />
          <button
            onClick={verificarResposta}
            className={styles.botao}
            disabled={isLoading}
          >
            {isLoading ? 'Verificando...' : 'Enviar'}
          </button>
          {mensagem && <p className={styles.mensagem}>{mensagem}</p>}
        </div>

        <p className={styles.progresso}>
          Etapa {indiceAtual + 1} de {missoes.length}
        </p>
      </div>
    </>
  );
}