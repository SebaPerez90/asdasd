'use client';

import Categories from '../Categories/Categories';
import styles from './Landing.module.css';
import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';

const Landing = () => {
  const { language } = useLanguageStore();
  const { theme } = useThemeStore();
  return (
    <div
      className={
        theme === 'dark' ? styles.main_container_dark : styles.main_container
      }>
      <div className={styles.landing_info_container}>
        <div className={styles.landing_text_container}>
          <h1 className={styles.title}>
            {language === 'english'
              ? 'Find Trustworthy Professionals Easily and Securely'
              : '¡Encuentra Profesionales Confiables de Manera Fácil y Segura'}
          </h1>

          <p className={styles.paragraph}>
            {language === 'english'
              ? 'With EaseHire, connecting with experts who meet your exact needs is as simple as a few clicks. We take care of simplifying the entire process for you. 🚀'
              : 'Con EaseHire, conectar con expertos que cumplen exactamente con tus necesidades es tan sencillo como hacer unos pocos clics. Nos encargamos de simplificar todo el proceso para ti. 🚀'}
          </p>
        </div>
        <div className={styles.buttons_container}>
          <button className={styles.posts_btn}>
            {language === 'english' ? 'Jobs' : 'Trabajos'}
          </button>
          <button className={styles.talents_btn}>
            {language === 'english' ? 'Talents' : 'Talentos'}
          </button>
        </div>
      </div>
      <Categories />
    </div>
  );
};
export default Landing;
