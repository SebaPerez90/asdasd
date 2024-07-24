'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';
import Settings from '../Settings/Settings';
import { usePathname, useRouter } from 'next/navigation';
import { useThemeStore } from '@/context/theme-store';
import { useLanguageStore } from '@/context/language-store';

const navLinks = [
  {
    path: '/talents',
    name_en: 'Talents',
    name_es: 'Talentos',
    label: 'navlink-talent',
  },
  {
    path: '/jobs',
    name_en: 'Jobs',
    name_es: 'Trabajos',
    label: 'navlink-jobs',
  },
  {
    path: '/about',
    name_en: 'About',
    name_es: 'Acerca',
    label: 'navlink-about',
  },
  {
    path: '/contact',
    name_en: 'Contact',
    name_es: 'Contacto',
    label: 'navlink-contact',
  },
];

const NavBar = () => {
  const { theme } = useThemeStore();
  const { language } = useLanguageStore();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header
      className={
        theme === 'dark'
          ? styles.header_container
          : styles.header_container_dark
      }>
      <div
        className={styles.logo_container}
        onClick={() => router.push('/')}>
        Ease Hire
      </div>
      <nav className={styles.navbar}>
        {navLinks.map((element, index) => (
          <Link
            key={index}
            aria-label={element.label}
            href={element.path}
            className={
              pathname === element.path ? styles.activeLink : styles.links
            }>
            {language === 'english' ? element.name_en : element.name_es}
          </Link>
        ))}
      </nav>
      <Settings />
    </header>
  );
};

export default NavBar;
