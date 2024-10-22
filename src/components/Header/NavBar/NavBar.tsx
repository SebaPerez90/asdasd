'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';
import Preferences from '../Preferences/Preferences';
import { usePathname, useRouter } from 'next/navigation';
import { useThemeStore } from '@/context/theme-store';
import { useLanguageStore } from '@/context/language-store';
import { useEffect } from 'react';
import HamburguerMenu from '../HamburguerMenu/HamburguerMenu';
import Image from 'next/image';
import icon_app from '@/assets/images/icon-app.png';

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
    path: '/auth',
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
    if (pathname === '/auth') {
      const nav_bar = document.getElementById('header_fixed');
      nav_bar!.style.display = 'none';
    } else {
      const nav_bar = document.getElementById('header_fixed');
      nav_bar!.style.display = 'flex';
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const nav_bar = document.getElementById('header_fixed');
      window.scrollY !== 0
        ? nav_bar?.classList.add(styles.header_fixed)
        : nav_bar?.classList.remove(styles.header_fixed);
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
      id='header_fixed'
      className={
        theme === 'dark'
          ? styles.header_container_dark
          : styles.header_container
      }>
      <div
        className={styles.logo_container}
        onClick={() => router.push('/')}>
        <Image
          priority
          width={40}
          height={40}
          src={icon_app}
          alt='icon-app'
        />
        EaseHire
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
      <Preferences />
      <HamburguerMenu />
    </header>
  );
};

export default NavBar;
