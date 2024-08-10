'use client';

import Categories from '../Categories/Categories';
import styles from './Landing.module.css';
import { useLanguageStore } from '@/context/language-store';

const Landing = () => {
  const { language } = useLanguageStore();

  return (
    <div className={styles.main_container}>
      <div className={styles.landing_info_container}>
        <div className={styles.landing_text_container}>
          <h1 className={styles.title}>
            {language === 'english'
              ? 'Finding trusted professionals has never been easier or safer!'
              : '¡Encontrar Profesionales confiables, nunca fue tan fácil y seguro!'}
          </h1>

          <p className={styles.paragraph}>
            {language === 'english'
              ? 'With just a few clicks, connect with skilled professionals who meet your needs.'
              : 'Con solo unos pocos clicks, conecta con profesionales capacitados que cumplen con tus necesidades.'}
            <br></br>
            <br></br>
            <strong>
              {language === 'english'
                ? 'We simplify the process!'
                : 'Nosotros simplificamos el proceso!'}{' '}
              🚀
            </strong>
          </p>
        </div>
        <div className={styles.buttons_container}>
          <button className={styles.posts_btn}>
            {language === 'english'
              ? 'Jobs'
              : 'Trabajos'}
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
