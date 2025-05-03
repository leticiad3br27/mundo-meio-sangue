'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import ParticlesProfecias from '../../components/ParticlesProfecias';
import styles from './page.module.css';

export default function ProfeciasPage() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [pai, setPai] = useState('');
  const [pronome, setPronome] = useState('');
  const [profecia, setProfecia] = useState('');
  const [mostrarProfecia, setMostrarProfecia] = useState(false);

  const deusesOlimpicos = [
    "Zeus", "Poseidon", "Hades", "Ares", "Atena", "Apolo", 
    "Ártemis", "Hefesto", "Afrodite", "Hermes", "Dionísio", 
    "Deméter", "Héstia", "Não Reclamado"
  ];

  const pronomes = [
    { valor: "ele/dele", label: "Ele/Dele" },
    { valor: "ela/dela", label: "Ela/Dela" },
    { valor: "elu/dele", label: "Elu/Dele" },
    { valor: "ile/dile", label: "Ile/Dile" },
    { valor: "outro", label: "Outro" }
  ];

  // Arrays completos para geração de profecias
  const lugares = [
    "Submundo", "Monte Olimpo", "Labirinto de Dédalo", "Mar de Monstros", 
    "Jardim das Hespérides", "Tártaro", "Rio Estige", "Palácio de Poseidon",
    "Acampamento Júpiter", "Deserto do Arizona", "Brooklyn", "Oficina de Hefesto",
    "Templo de Apolo", "Floresta de Dodona", "Atlântida", "Vale dos Deuses",
    "Cidade dos Deuses", "Palácio de Hades", "Oásis das Musas", "Planícies de Asfodelos"
  ];

  const objetos = [
    "Raio Mestre", "Tridente de Poseidon", "Casco da Medusa", "Flecha de Apolo", 
    "Espada de Hades", "Elmo da Escuridão", "Escudo de Atena", "Arco de Ártemis",
    "Colar de Harmonia", "Sandálias de Hermes", "Cálice de Dionísio", "Martelo de Hefesto",
    "Espelho da Verdade", "Pena de Fênix", "Lira de Orfeu", "Dádiva de Afrodite",
    "Sino dos Ventos", "Mapa do Labirinto", "Sino de Atena", "Cajado de Circe"
  ];

  const monstros = [
    "Minotauro", "Hidra de Lerna", "Cérbero", "Ciclope", "Quimera", "Medusa",
    "Basilisco", "Grifo", "Esfinge", "Pégaso rebelde", "Dragão de Ladon",
    "Harpia", "Crocotta", "Gorgona", "Empousa", "Gigante", "Titã renegado",
    "Leão de Nemeia", "Javali de Erimanto", "Hipocampo enlouquecido"
  ];

  const companheiros = [
    "um sátiro experiente", "uma caçadora de Ártemis", "um filho de Hermes", 
    "uma filha de Atena", "um ciclope amigável", "um espírito da natureza",
    "um fantasma leal", "um centauro sábio", "uma ninfa curiosa", 
    "um semideus não-reclamado", "um automaton de Hefesto", "um lobo de Marte",
    "um oráculo em treinamento", "um filho de Íris", "uma filha de Hécate"
  ];

  const objetivos = [
    "libertar um semideus prisioneiro", "encontrar uma relíquia perdida", 
    "desvendar um antigo mistério", "negociar uma trégua entre facções",
    "prevenir uma guerra divina", "curar uma maldição ancestral",
    "restaurar a memória de um aliado", "desativar uma armadilha mortal",
    "decifrar uma profecia antiga", "proteger um artefato sagrado",
    "resgatar um animal mágico", "selar um portal perigoso",
    "apaziguar um deus ofendido", "encontrar um herói desaparecido",
    "reunir os ingredientes para um feitiço poderoso"
  ];

  const eventos = [
    "solstício de verão", "equinócio de outono", "ataque dos titãs",
    "conselho dos deuses", "anoitecer do terceiro dia", "alinhamento planetário",
    "eclipse lunar", "festival de Apolo", "julgamento de Hades",
    "coroação do novo deus", "renascimento da Fênix", "despertar do dragão",
    "cerimônia de pacto", "ritual de invocação", "profecia se cumprindo"
  ];

  const personagens = [
    "os deuses do Olimpo", "os espíritos da natureza", "os fantasmas do Submundo",
    "os centauros do vale", "as ninfas do rio", "os titãs aprisionados",
    "os semideuses renegados", "as Moiras", "as Erínias", "os deuses menores",
    "os filhos de Nix", "os guardiões do Labirinto", "os sacerdotes de Delfos",
    "as Amazonas", "os caçadores de Artemis"
  ];

  const consequencias = [
    "o mundo dos deuses entrará em guerra", "o Acampamento será destruído",
    "seu chalé será amaldiçoado", "os mortais descobrirão nosso mundo",
    "os monstros se tornarão incontroláveis", "o equilíbrio do mundo será rompido",
    "um deus menor perecerá", "o véu entre os mundos se rasgará",
    "um antigo mal será liberado", "o tempo começará a se desfazer",
    "a magia desaparecerá", "os mortos caminharão entre os vivos",
    "os deuses perderão seus poderes", "a profecia final se iniciará"
  ];

  const avisos = [
    "as palavras enganosas", "o caminho mais fácil", "sua arrogância",
    "promessas vazias", "traições inesperadas", "alianças duvidosas",
    "o preço do poder", "o brilho do ouro", "a escuridão do seu coração",
    "a fome por vingança", "o sussurro dos fantasmas", "o canto das sereias",
    "a ira dos deuses", "a frieza da lógica", "o calor da paixão"
  ];

  const adjetivos = [
    "sombria", "perigosa", "traiçoeira", "gloriosa", "desesperadora",
    "misteriosa", "sagrada", "impossível", "divina", "mortal",
    "secreta", "ancestral", "profana", "esquecida", "inevitável"
  ];

  const desfechos = [
    "o preço será pago em sangue",
    "sua linhagem será testada",
    "um grande sacrifício será exigido",
    "o destino do mundo estará em suas mãos",
    "você enfrentará seu maior medo",
    "um segredo de família será revelado",
    "sua verdadeira natureza será exposta",
    "uma escolha impossível terá que ser feita",
    "o passado retornará para assombrá-lo",
    "um amor proibido florescerá"
  ];

  const versiculos = [
    "A espada e a balança decidirão seu destino.",
    "O que foi perdido será reencontrado, mas a que custo?",
    "Quando o sangue de olímpico e mortal se misturar, a profecia se cumprirá.",
    "Nas sombras, a verdade espera.",
    "O tempo é um rio que flui em todas as direções.",
    "O preço da vitória será pago em lágrimas.",
    "Quando o último aliado cair, a escolha será sua.",
    "O deus esquecido despertará.",
    "A chave está no coração do herói.",
    "O fim começa com um único passo."
  ];

  // Funções auxiliares
  const randomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const randomChance = (percent) => Math.random() < percent/100;

  const gerarProfecia = (e) => {
    e.preventDefault();
    
    const randomMission = () => [
      `Viajar até o ${randomElement(lugares)} para recuperar o ${randomElement(objetos)} roubado`,
      `Derrotar o ${randomElement(monstros)} que ameaça o ${randomElement(["Acampamento Meio-Sangue", "Acampamento Júpiter", "mundo mortal"])}`,
      `Acompanhar ${randomElement(companheiros)} em uma jornada para ${randomElement(objetivos)}`,
      `Encontrar o ${randomElement(objetos)} perdido antes do ${randomElement(eventos)}`,
      `Negociar com ${randomElement(personagens)} para evitar ${randomElement(consequencias)}`
    ];

    // Determina o tratamento de gênero
    let tratamento;
    switch(pronome) {
      case 'ele/dele': tratamento = 'filho'; break;
      case 'ela/dela': tratamento = 'filha'; break;
      case 'elu/dele': 
      case 'ile/dile': tratamento = 'filhe'; break;
      case 'outro': tratamento = 'descendente'; break;
      default: tratamento = 'filho(a)';
    }

    // Construção da profecia
    let profeciaGerada = `
      ${nome}, ${tratamento} de ${pai}, com ${idade} anos,
      você embarcará em uma jornada ${randomElement(adjetivos)} 
      ${randomChance(50) ? `no ${randomElement(lugares)}` : `sob o ${randomElement(eventos)}`}
      para ${randomElement(objetivos)}.
      
      Sua missão: ${randomElement(randomMission())}.
      ${randomChance(70) ? `Cuidado com ${randomElement(avisos)},` : `Confie em ${randomElement(companheiros)},`}
      pois ${randomElement(consequencias)}.
      
      ${randomElement(desfechos)}.
    `;

    // Adiciona versículo final (60% de chance)
    if(randomChance(60)) {
      profeciaGerada += `\n\n${randomElement(versiculos)}`;
    }

    setProfecia(profeciaGerada);
    setMostrarProfecia(true);
  };

  return (
    <div className={styles.container}>
      <ParticlesProfecias />
      <Header />
      
      <main className={styles.main}>
        <h1 className={styles.title}>Profecias do Oráculo</h1>
        
        <div className={styles.oraculoContainer}>
          {!mostrarProfecia ? (
            <form onSubmit={gerarProfecia} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="nome" className={styles.label}>Seu nome:</label>
                <input 
                  type="text" 
                  id="nome" 
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="idade" className={styles.label}>Sua idade:</label>
                <input 
                  type="number" 
                  id="idade" 
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  min="12"
                  max="18"
                  required
                  className={styles.input}
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="pronome" className={styles.label}>Seus pronomes:</label>
                <select
                  id="pronome"
                  value={pronome}
                  onChange={(e) => setPronome(e.target.value)}
                  required
                  className={styles.select}
                >
                  <option value="">-- Selecione --</option>
                  {pronomes.map((opcao) => (
                    <option key={opcao.valor} value={opcao.valor}>
                      {opcao.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="pai" className={styles.label}>Seu progenitor olímpico:</label>
                <select 
                  id="pai" 
                  value={pai}
                  onChange={(e) => setPai(e.target.value)}
                  required
                  className={styles.select}
                >
                  <option value="">-- Selecione --</option>
                  {deusesOlimpicos.map((deus) => (
                    <option key={deus} value={deus}>{deus}</option>
                  ))}
                </select>
              </div>
              
              <button type="submit" className={styles.button}>
                Consultar o Oráculo
              </button>
            </form>
          ) : (
            <div className={styles.profeciaContainer}>
              <h2 className={styles.profeciaTitle}>Sua Profecia:</h2>
              <div className={styles.profeciaTexto}>
                {profecia.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
              <button 
                onClick={() => setMostrarProfecia(false)}
                className={styles.button}
              >
                Consultar Novamente
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}