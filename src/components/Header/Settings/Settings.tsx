import styles from './Settings.module.css';
import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { useRef } from 'react';
import english_icon from '@/assets/images/english-icon.png';
import spanish_icon from '@/assets/images/spanish-icon.png';
import Image from 'next/image';

const Settings = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const { toggleTheme, theme } = useThemeStore();

  const themeOptions = useRef<HTMLDivElement | null>(null);
  const openThemeOptions = () => {
    theme === 'dark'
      ? themeOptions.current?.classList.toggle(styles.theme_options_visible)
      : themeOptions.current?.classList.toggle(
          styles.theme_options_visible_dark
        );
  };

  return (
    <div
      className={
        theme === 'dark' ? styles.settings_menu : styles.settings_menu_dark
      }>
      <div
        className={styles.theme_btns_container}
        onClick={openThemeOptions}>
        {theme === 'dark' ? <FaMoon /> : <BsFillSunFill />}
        <div
          ref={themeOptions}
          className={styles.theme_options_hide}>
          <span
            className={styles.btn}
            onClick={theme === 'dark' ? toggleTheme : undefined}>
            {language === 'english' ? 'Dark' : 'Oscuro'}
          </span>
          <span
            className={styles.btn}
            onClick={theme === 'dark' ? undefined : toggleTheme}>
            {language === 'english' ? 'Light' : 'Claro'}
          </span>
        </div>
      </div>
      <div className={styles.language_btn_container}>
        <button
          className={styles.language_btn}
          onClick={() => toggleLanguage()}>
          {language === 'english' ? 'Eng' : 'Esp'}
        </button>
        <Image
          width={30}
          height={30}
          src={language === 'english' ? english_icon : spanish_icon}
          alt='current-lang-icon'
        />
      </div>
    </div>
  );
};

export default Settings;
