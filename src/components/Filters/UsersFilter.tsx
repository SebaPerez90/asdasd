'use client';

import { useState } from 'react';
import styles from './UsersFilter.module.css';
import { useLanguageStore } from '@/context/language-store';
import { FaStar } from 'react-icons/fa6';
import professions from '@/utils/professions-mock.json';

const UsersFilter = () => {
  const { language } = useLanguageStore();
  const [rating, setRating] = useState<number | string>(3);

  return (
    <div className={styles.filter_container}>
      <h1 className={styles.title}>
        {language === 'english' ? 'Filters' : 'Filtros'}
      </h1>
      <div className={styles.input_rate_container}>
        <p className={styles.rate_subtitle}>
          {language === 'english' ? 'User Rating' : 'Calificación del usuario'}
        </p>
        <div className={styles.rate_container}>
          <input
            type='range'
            min='1'
            max='5'
            step='1'
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className={styles.range_input}
          />
          <span className={styles.rate}>
            {rating}
            <FaStar
              style={{
                fontSize: '1.3em',
                transform: 'translateY(-0.1em)',
                color: '#FAFF00',
                filter: 'drop-shadow(1px 1px 1px #000000af)',
              }}
            />
          </span>
        </div>
      </div>

      <div className={styles.premium_container}>
        <p className={styles.premium_subtitle}>
          {language === 'english' ? 'Premium Member' : 'Usuario Premium'}
        </p>
        <div className={styles.btn_container}>
          <div className={styles.switcher}>
            <button className={styles.btn}></button>
          </div>
        </div>
      </div>

      <div className={styles.input_profession_container}>
        <p className={styles.profession_subtitle}>
          {language === 'english' ? 'Professions' : 'Profesiones'}
        </p>
        {professions.map((element, index) => (
          <label
            className={styles.labels_container}
            key={index}>
            <input
              id={String(index)}
              key={index}
              type='checkbox'
              value={element.professionEn}
              onChange={(e) => console.log(e.target.value)}
            />
            {language === 'english'
              ? element.professionEn
              : element.professionEs}
          </label>
        ))}
      </div>
    </div>
  );
};

export default UsersFilter;
