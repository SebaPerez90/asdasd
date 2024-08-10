'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';
import Settings from '../Settings/Settings';
import { usePathname, useRouter } from 'next/navigation';
import { useThemeStore } from '@/context/theme-store';
import { useLanguageStore } from '@/context/language-store';
import { useEffect } from 'react';

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

  useEffect(() => {
    const handleScroll = () => {
      const nav_bar: HTMLElement | null = document.getElementById('nav-bar');
      window.scrollY !== 0
        ? nav_bar?.classList.add(styles.navbar_fixed)
        : nav_bar?.classList.remove(styles.navbar_fixed);
    };

    handleScroll();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <header
      id='nav-bar'
      className={
        theme === 'dark'
          ? styles.header_container
          : styles.header_container_dark
      }
      style={
        theme === 'dark'
          ? { backgroundColor: '#ffffff89' }
          : { backgroundColor: '#0000008f' }
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
