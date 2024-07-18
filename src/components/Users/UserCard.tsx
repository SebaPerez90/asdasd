'use client';

import styles from './UserCard.module.css';
import users from '@/utils/users-mock.json';
import { useLanguageStore } from '@/context/language-store';
import { FaStar } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { CgDetailsMore } from 'react-icons/cg';
import { MdPersonAddAlt1 } from 'react-icons/md';
import Image from 'next/image';
import user_male from '@/assets/svg/user-male.svg';
import user_female from '@/assets/svg/user-female.svg';

const UserCard = () => {
  const { language } = useLanguageStore();

  return (
    <div className={styles.user_cards_container}>
      {users.map((user, index) => (
        <div
          className={styles.user_card}
          key={index}>
          <div>
            <div className={styles.aditional_info}>
              <span className={styles.rate}>
                <FaStar
                  style={{
                    color: '#EEF200',
                    fontSize: '1.4em',
                    transform: 'translateY(-0.1em)',
                    filter: 'drop-shadow(1px 1px 1px #000000af)',
                  }}
                />
                {user.profesionalRate}
              </span>
              {user.newMember ? (
                <span className={styles.newmember_tag}>
                  {language === 'english' ? 'NEW MEMBER' : 'NUEVO MIEMBRO'}
                </span>
              ) : null}
            </div>
            <div className={styles.user_data_container}>
              <h1 className={styles.title}>{user.name}</h1>
              <div className={styles.location}>
                <span>
                  <FaLocationDot style={{ color: '#F72200' }} />
                  {user.country},
                </span>
                <span>{user.city}</span>
              </div>
            </div>
            <div className={styles.professions_container}>
              {user.profesions.map((profession, index) => (
                <span
                  className={styles.professions}
                  key={index}>
                  {profession}
                </span>
              ))}
            </div>
            <div className={styles.btns_container}>
              <button className={styles.btns}>
                <CgDetailsMore />
                {language === 'english' ? 'view details' : 'ver detalles'}
              </button>
              <button className={styles.btns}>
                <MdPersonAddAlt1 />
                {language === 'english' ? 'add friend' : 'agregar'}
              </button>
            </div>
            <Image
              src={user.genre === 'female' ? user_female : user_male}
              alt={user.name}
              width={120}
              height={120}
              className={styles.image}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
