'use client';

import Link from 'next/link';
import styles from './NavBar.module.css';
import Profile from '../Profile/Profile';
import { usePathname, useRouter } from 'next/navigation';
import { useThemeStore } from '@/context/theme-store';

const navLinks = [
  {
    path: '/talents',
    name: 'Talents',
    label: 'navlink-talent',
  },
  {
    path: '/jobs',
    name: 'Jobs',
    label: 'navlink-jobs',
  },
  {
    path: '/about',
    name: 'About',
    label: 'navlink-about',
  },
  {
    path: '/contact',
    name: 'Contact',
    label: 'navlink-contact',
  },
];

const NavBar = () => {
  const { theme } = useThemeStore();
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
      <span
        className={styles.logo}
        onClick={() => router.push('/')}>
        LOGO
      </span>
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
            {element.name}
          </Link>
        ))}
      </nav>
      <div className={styles.menu}>
        <Profile />
      </div>
    </header>
  );
};

export default NavBar;
