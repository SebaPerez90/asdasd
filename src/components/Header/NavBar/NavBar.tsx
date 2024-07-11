'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';
import Settings from '../Settings/Settings';
import { usePathname, useRouter } from 'next/navigation';
import { useThemeStore } from '@/context/theme-store';
import { useLanguageStore } from '@/context/language-store';
import Image from 'next/image';
import logo from '@/assets/svg/logo.svg';

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
      style={
        theme === 'dark'
          ? { backgroundColor: '#f4f4f4' }
          : { backgroundColor: '#252525', color: '#f4f4f4' }
      }
      className={styles.header}>
      <div
        className={styles.logo_container}
        onClick={() => router.push('/')}>
        <Image
          src={logo}
          alt='logo'
          width={80}
          height={80}
          className={styles.logo_image}
        />
      </div>
      <nav className={styles.navbar}>
        {navLinks.map((element, index) => (
          <Link
            key={index}
            style={theme === 'dark' ? undefined : { color: '#f4f4f4' }}
            className={
              pathname === element.path ? styles.activeLink : styles.links
            }
            aria-label={element.label}
            href={element.path}>
            {language === 'english' ? element.name_en : element.name_es}
          </Link>
        ))}
      </nav>
      <Settings />
    </header>
  );
};

export default NavBar;
