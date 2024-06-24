import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { BiWorld } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';

const Profile = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const { toggleTheme, theme } = useThemeStore();

  const items: MenuProps['items'] = [
    {
      label: (
        <button onClick={toggleTheme}>
          {theme === 'dark' ? <FaMoon /> : <BsFillSunFill />}
        </button>
      ),
      key: '1',
    },
    {
      label: (
        <button onClick={toggleLanguage}>
          <BiWorld />
          {language === 'english' ? 'en' : 'es'}
        </button>
      ),

      key: '2',
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <div>
      <Dropdown.Button
        menu={menuProps}
        placement='bottom'
        icon={<FaUser />}>
        {language === 'english' ? 'Pepe' : 'Juan'}
      </Dropdown.Button>
    </div>
  );
};

export default Profile;
