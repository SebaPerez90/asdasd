import styles from './HamburguerMenu.module.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
// import { IoMdHome } from 'react-icons/io';
// import { FaUserTie } from 'react-icons/fa6';
// import { HiOutlineMailOpen } from 'react-icons/hi';
// import { IoMdSettings } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';
import { BsMoonStarsFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import english_icon from '@/assets/images/english-icon.png';
import spanish_icon from '@/assets/images/spanish-icon.png';

const HamburguerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { language, toggleLanguage } = useLanguageStore();
  const { theme, toggleTheme } = useThemeStore();
  const pathname = usePathname();

  const openMenu = () => {
    const line_a = document.getElementById('line_a');
    const line_b = document.getElementById('line_b');
    const line_c = document.getElementById('line_c');
    const main_section = document.getElementById('main-section');
    const footer_section = document.getElementById('footer-section');

    if (isOpen === false) {
      line_a!.style.cssText = 'rotate:45deg;top:0.6em';
      line_b!.style.opacity = '0';
      line_c!.style.cssText = 'rotate:-45deg;bottom:0.6em';

      main_section!.style.filter = 'blur(5px)';
      footer_section!.style.filter = 'blur(5px)';
      setIsOpen(true);
    } else {
      line_a!.style.cssText = 'rotate:0deg;top:0';
      line_b!.style.opacity = '1';
      line_c!.style.cssText = 'rotate:0deg;top:0';

      main_section!.style.filter = 'blur(0px)';
      footer_section!.style.filter = 'blur(0px)';
      setIsOpen(false);
    }
  };

  const navLinks = [
    {
      path: '/',
      name_en: 'Home',
      name_es: 'Inicio',
      label: 'navlink-home',
      icon: '',
    },
    {
      path: '/talents',
      name_en: 'Talents',
      name_es: 'Talentos',
      label: 'navlink-talent',
      icon: '',
    },
    {
      path: '/jobs',
      name_en: 'Jobs',
      name_es: 'Trabajos',
      label: 'navlink-jobs',
      icon: '',
    },
    {
      path: '/contact',
      name_en: 'Contact',
      name_es: 'Contacto',
      label: 'navlink-contact',
      icon: '',
    },
  ];

  return (
    <div
      className={
        theme === 'dark'
          ? styles.button_menu_container_dark
          : styles.button_menu_container
      }>
      <div
        aria-label='button-menu'
        className={styles.button_menu}
        onClick={openMenu}>
        <span
          id='line_a'
          className={styles.line_a}></span>
        <span
          id='line_b'
          className={styles.line_b}></span>
        <span
          id='line_c'
          className={styles.line_c}></span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -100, opacity: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            exit={{ y: -400, opacity: 0 }}
            className={styles.side_menu}>
            <motion.nav
              transition={{
                delay: 0.2,
                type: 'spring',
                bounce: 0.5,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className={styles.navlinks_container}>
              {navLinks.map((element, index) => (
                <Link
                  key={index}
                  href={element.path}
                  style={
                    pathname === element.path
                      ? {
                          color: 'inherit',
                          fontWeight: 'bolder',
                          transition: '200ms',
                        }
                      : undefined
                  }
                  aria-label={element.label}>
                  <span>{element.icon}</span>
                  {language === 'english' ? element.name_en : element.name_es}
                </Link>
              ))}
              <div className={styles.preferences_btns_container}>
                <button onClick={() => toggleTheme()}>
                  {theme === 'dark' ? <BsMoonStarsFill /> : <IoSunny />}
                </button>
                <button onClick={() => toggleLanguage()}>
                  <Image
                    width={30}
                    height={30}
                    src={language === 'english' ? english_icon : spanish_icon}
                    alt='current-lang-icon'
                  />
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburguerMenu;
/**
 * 
 *  <IoMdSettings
                  style={{
                    position: 'absolute',
                    left: '2rem',
                    color: '#e8f1ff',
                    fontSize: '1.25rem',
                    lineHeight: ' 1.75rem',
                  }}
                />
 */
