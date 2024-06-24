'use client';

import { useLanguageStore } from '@/context/language-store';
import { useThemeStore } from '@/context/theme-store';
// import Register from '@/components/Forms/Register/Register';
import { FaUser } from 'react-icons/fa';
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

const Profile = () => {
  const { toggleLanguage, language } = useLanguageStore();
  const { toggleTheme, theme } = useThemeStore();

  const items: MenuProps['items'] = [
    {
      label: <button onClick={toggleTheme}>toggle theme</button>,
      key: '1',
    },
    {
      label: <button onClick={toggleLanguage}>toggle language</button>,

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
