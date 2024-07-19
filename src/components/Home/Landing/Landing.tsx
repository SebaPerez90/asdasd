'use client';

import Members from '../Members/Members';
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
              ? 'Finding reliable help has never been easier or safer!'
              : '¡Encontrar ayuda confiable nunca fue tan fácil y seguro!'}
          </h1>

          <p className={styles.paragraph}>
            {language === 'english'
              ? 'With just a few clicks, connect with skilled professionals who meet your needs.'
              : 'Con solo unos pocos clicks, conecta con profesionales capacitados que cumplen con tus necesidades.'}
            <br></br>
            <br></br>
            {language === 'english'
              ? 'We simplify the process!'
              : 'Nosotros simplificamos el proceso!'}
          </p>
        </div>
        <div className={styles.buttons_container}>
          <button className={styles.posts_btn}>
            {language === 'english' ? 'Publications' : 'Publicaciones'}
          </button>
          <button className={styles.talents_btn}>
            {language === 'english' ? 'Find professionals' : 'Busca Profesionales'}
          </button>
        </div>
      </div>
      <Members />
    </div>
  );
};
export default Landing;
