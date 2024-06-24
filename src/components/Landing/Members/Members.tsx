'use client';

import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
import styles from './Members.module.css';

const Members = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const { toggleTheme, theme } = useThemeStore();

  return (
    <div className={styles.members}>
      <button onClick={toggleTheme}>toggle theme</button>
      <button onClick={toggleLanguage}>
        {language === 'english' ? 'toggle lang' : 'cambiar lenguaje'}
      </button>
      <div
        className={
          theme === 'dark' ? styles.img_container : styles.img_container_dark
        }>
        IMG CONTAINER
      </div>
    </div>
  );
};

export default Members;
