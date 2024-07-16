'use client';

import Link from 'next/link';
import { useLanguageStore } from '@/context/language-store';

const NotFound = () => {
  const { language } = useLanguageStore();
  return (
    <div className='notfound-container'>
      <h2>Not Found</h2>
      <p>
        {language === 'english'
          ? 'Could not find requested resource'
          : 'No se pudo encontrar el recurso solicitado'}
      </p>
      <Link href='/'>
        {language === 'english' ? 'Go back home' : 'Volver al inicio'}
      </Link>
    </div>
  );
};

export default NotFound;
