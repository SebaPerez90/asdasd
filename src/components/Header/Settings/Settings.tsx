import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import styles from './Settings.module.css';
import { LiaLanguageSolid } from 'react-icons/lia';
import { useRef } from 'react';

const Settings = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const { toggleTheme, theme } = useThemeStore();

  const themeOptions = useRef<HTMLDivElement | null>(null);

  const openThemeOptions = () => {
    themeOptions.current?.classList.toggle(styles.theme_options_visible);
  };

  return (
    <div className={styles.settings_menu}>
      <div
        style={theme === 'dark' ? { color: '#000' } : { color: '#fff' }}
        className={styles.theme_btn}
        onClick={openThemeOptions}>
        {theme === 'dark' ? <FaMoon /> : <BsFillSunFill />}
        <div
          ref={themeOptions}
          className={styles.theme_options_hide}>
          <span
            // style={theme === 'dark' ? { color: '#f00' } : { color: 'blue' }}
            onClick={theme === 'dark' ? toggleTheme : undefined}>
            {language === 'english' ? 'dark' : 'oscuro'}
          </span>
          <span
            // style={theme === 'dark' ? { color: '#f00' } : { color: 'blue' }}
            onClick={theme === 'dark' ? undefined : toggleTheme}>
            {language === 'english' ? 'light' : 'claro'}
          </span>
        </div>
      </div>
      <button
        className={styles.language_btn}
        onClick={() => toggleLanguage()}>
        {language === 'english' ? <LiaLanguageSolid /> : <LiaLanguageSolid />}
        {language === 'english' ? 'Eng' : 'Esp'}
      </button>
    </div>
  );
};

export default Settings;
