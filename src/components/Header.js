'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

const links = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Personagens', href: '/personagens' },
  { label: 'Chalés', href: '/casas' },
  { label: 'Profecias', href: '/profecias' },
  { label: 'Missões', href: '/missoes' },
  { label: 'Contato', href: '/contato' },
  { label: 'Reclamação', href: '/reclamacao' },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuAberto(prev => !prev);
  const fecharMenu = () => setMenuAberto(false);

  return (
    <header className={styles.navContainer}>
      <nav role="navigation" aria-label="Menu principal">
        
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={menuAberto}
          aria-controls="nav-links"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
        >
          ☰
        </button>

        <div
          id="nav-links"
          className={`${styles.navLinks} ${menuAberto ? styles.navLinksOpen : ''}`}
          role="menu"
          aria-hidden={!menuAberto}
        >
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                onClick={fecharMenu}
                className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                role="menuitem"
                tabIndex={0} // Adicionando tabIndex para acessibilidade
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Adicionando o SVG aqui */}
        <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M57 24.6C54 17.4 44.8 8.7 44.8 8.7s3 7.4.8 17.3l3.5-3s3.3 1.4 3.7 5c.5 4.4-2 10.6-2 10.6s-5.5-1.7-13.9-1.6l-3-19.6l7.2 4.7L32 2l-9 19.9l7.2-4.7l-3 19.6c-8.4-.1-13.9 1.6-13.9 1.6s-2.5-6.2-2-10.6c.4-3.5 3.7-5 3.7-5l3.5 3c-2.2-9.8.8-17.3.8-17.3S10 17.4 7 24.6C3.9 32 2 40.8 2 40.8l6.4 5.9s5.6-1.7 10-2c4.1-.3 8.9-.4 8.9-.4l-.6 8.7l5.3 9l5.3-9l-.6-8.7s4.8.1 8.9.4c4.3.3 10 2 10 2l6.4-5.9s-1.9-8.8-5-16.2" fill="#eda454"></path>
          </g>
        </svg>

      </nav>
 </header>
  );
}