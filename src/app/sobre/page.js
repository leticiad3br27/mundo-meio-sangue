import Header from '../../components/Header';
import ParticlesBackground from '../../components/ParticlesBackground';
import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <ParticlesBackground />
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Sobre o projeto Mundo Meio-Sangue</h1>
        
        <section className={styles.section}>
          <h2 className={styles.subtitle}>✨ Por que criar este projeto?</h2>
          <p className={styles.paragraph}>
            Como fã da série "Percy Jackson e os Olimpianos" de Rick Riordan, sempre senti que a comunidade merecia uma experiência interativa tão rica quanto o Pottermore proporcionou para os fãs de Harry Potter. O Mundo Meio-Sangue nasceu da vontade de criar um espaço digital imersivo onde os fãs pudessem:
          </p>
          <ul className={styles.list}>
            <li>Explorar o Acampamento Meio-Sangue de forma interativa</li>
            <li>Descobrir em qual chalé seriam selecionados</li>
            <li>Aprender mais sobre a mitologia greco-romana</li>
            <li>Conectar-se com outros fãs da série</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>🏛️ O que nos inspira</h2>
          <p className={styles.paragraph}>
            O Pottermore mostrou como uma plataforma pode expandir o universo de uma saga literária, e queremos fazer o mesmo para o mundo criado por Rick Riordan. Nosso objetivo é capturar a essência mágica dos livros enquanto adicionamos novas camadas de interatividade e conteúdo exclusivo.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>⚡ Funcionalidades especiais</h2>
          <div className={styles.features}>
            <div className={styles.featureCard}>
              <h3>Teste do Chalé</h3>
              <p>Descubra qual deus olímpico seria seu progenitor através de um quiz personalizado</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Mapa Interativo</h3>
              <p>Explore o Acampamento Meio-Sangue como nunca antes</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Bestiário Mitológico</h3>
              <p>Conheça todos os monstros e criaturas do universo Percy Jackson</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subtitle}>🌊 Para a comunidade</h2>
          <p className={styles.paragraph}>
            Este é um projeto feito por fãs, para fãs. Não temos qualquer afiliação oficial com Rick Riordan ou a Disney, mas criamos esta plataforma com todo o amor e respeito pelo universo que tanto amamos. Nosso objetivo é celebrar a criatividade da comunidade Meio-Sangue e manter viva a magia dos livros.
          </p>
          <p className={styles.paragraph}>
            <strong>Junte-se a nós nesta aventura!</strong> Seja você um semideus de Atena, Ares ou até mesmo um não-reclamado, há um lugar para você aqui no Mundo Meio-Sangue.
          </p>
        </section>
      </main>
    </div>
  );
}