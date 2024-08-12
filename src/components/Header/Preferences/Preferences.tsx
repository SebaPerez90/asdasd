import styles from './Preferences.module.css';
import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
import { MdSunny } from 'react-icons/md';
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
      ? themeOptions.current?.classList.toggle(
          styles.theme_options_visible_dark
        )
      : themeOptions.current?.classList.toggle(styles.theme_options_visible);
  };

  return (
    <div
      className={
        theme === 'dark' ? styles.settings_menu_dark : styles.settings_menu
      }>
      <div className={styles.acces_btns_container}>
        <button className={styles.login_btn}>Login</button>
        <button className={styles.signup_btn}>Sign up</button>
      </div>
      <div
        className={styles.theme_btns_container}
        onClick={openThemeOptions}>
        {theme === 'dark' ? <MdSunny /> : <FaMoon />}
        <div
          ref={themeOptions}
          className={styles.theme_options_hide}>
          <span
            className={styles.btn}
            onClick={theme === 'dark' ? undefined : toggleTheme}>
            {language === 'english' ? 'Dark' : 'Oscuro'}
          </span>
          <span
            className={styles.btn}
            onClick={theme === 'dark' ? toggleTheme : undefined}>
            {language === 'english' ? 'Light' : 'Claro'}
          </span>
        </div>
      </div>
      <button
        className={styles.language_btn}
        onClick={() => toggleLanguage()}>
        <Image
          width={25}
          height={25}
          src={language === 'english' ? english_icon : spanish_icon}
          alt='current-lang-icon'
        />
      </button>
    </div>
  );
};

export default Settings;
