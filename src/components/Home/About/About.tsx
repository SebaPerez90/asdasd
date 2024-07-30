'use client';

import styles from './About.module.css';
import chats from '@/utils/fake-chats-mock.json';
import { IoSend } from 'react-icons/io5';
import { FaCamera } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import { useLanguageStore } from '@/context/language-store';
import Image from 'next/image';

const About = () => {
  const { language } = useLanguageStore();

  return (
    <section className={styles.main_container}>
      <div className={styles.about_container}>
        <div className={styles.about_text_container}>
          <h1>
            {language === 'english' ? '¿Why choose us?' : '¿Por qué elegirnos?'}
            <strong>
              {' '}
              {language === 'english' ? 'choose us' : 'elegirnos'}
            </strong>
          </h1>
          <p className={styles.about_parragraph}>
            {language === 'english'
              ? 'We stand out from other platforms that focus solely on fixed jobs and are burdened with bureaucracy. Our app quickly connects you with specialists to address your specific needs'
              : 'Nos diferenciamos de otras plataformas que solo se enfocan en trabajos fijos y con mucha burocracia de por medio. Nuestra app te conecta rápidamente con especialistas para resolver tus necesidades específicas.'}
          </p>
          <ul>
            <li>
              {language === 'english' ? (
                <>
                  As a <strong>client</strong>, you enjoy a fast and easy-to-use
                  solution with no additional costs and access to top-rated
                  professionals.
                </>
              ) : (
                <>
                  Como <strong>cliente</strong>, disfrutas de una solución
                  rápida y fácil de usar, sin costos adicionales y con acceso a
                  los profesionales mejor calificados.
                </>
              )}
            </li>
            <li>
              {language === 'english' ? (
                <>
                  As a <strong>service provider</strong>, you manage your time
                  and rates according to your convenience. We provide a secure
                  and reliable experience for you and your clients.
                </>
              ) : (
                <>
                  Como <strong>prestador de servicios</strong>, gestionas tu
                  tiempo y tarifas a tu conveniencia. Proveemos una experiencia
                  segura y confiable para ti y tus clientes.
                </>
              )}
            </li>
          </ul>
        </div>
        <div className={styles.benefits}>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-hand-click'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#47b5ff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5' />
              <path d='M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5' />
              <path d='M14 10.5a1.5 1.5 0 0 1 3 0v1.5' />
              <path d='M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47' />
              <path d='M5 3l-1 -1' />
              <path d='M4 7h-1' />
              <path d='M14 3l1 -1' />
              <path d='M15 6h1' />
            </svg>
            <h3>
              {language === 'english' ? 'Fast and Easy' : 'Rápido y fácil'}
            </h3>
            <p>
              {language === 'english'
                ? 'Request a chat with a professional in just a few minutes with a couple of clicks'
                : 'Solicita un chat con un profesional en unos minutos con un par de clicks'}
            </p>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-pig-money'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#47b5ff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M15 11v.01' />
              <path d='M5.173 8.378a3 3 0 1 1 4.656 -1.377' />
              <path d='M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z' />
            </svg>
            <h3>{language === 'english' ? 'Free' : 'Gratis'}</h3>
            <p>
              {language === 'english'
                ? 'Enjoy all the benefits at no cost. Our platform is completely free.'
                : 'Disfruta de todos los beneficios sin costo. Nuestra plataforma es completamente gratuita.'}
            </p>
          </div>
          <div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-mood-check'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#47b5ff'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M20.925 13.163a8.998 8.998 0 0 0 -8.925 -10.163a9 9 0 0 0 0 18' />
              <path d='M9 10h.01' />
              <path d='M15 10h.01' />
              <path d='M9.5 15c.658 .64 1.56 1 2.5 1s1.842 -.36 2.5 -1' />
              <path d='M15 19l2 2l4 -4' />
            </svg>
            <h3>{language === 'english' ? 'Ratings' : 'Valoraciones'}</h3>
            <p>
              {language === 'english'
                ? 'Review ratings and feedback from other clients to make informed decisions when hiring professionals.'
                : 'Revisa calificaciones y reseñas de otros clientes para tomar la decision al contratar profesionales.'}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.experiences_container}>
        <h1 className={styles.experiences_title}>
          {language === 'english'
            ? 'Do you identify with any of these '
            : '¿Te identificas con alguna de estas '}
          <strong>
            {language === 'english' ? 'bad experiences' : 'malas experiencias'}
          </strong>
          ?
        </h1>
        <div className={styles.experiences}>
          {chats.map((element, index) => (
            <div
              className={styles.message_container}
              key={index}>
              <div className={styles.chat_options_top}>
                <IoMdArrowRoundBack />
                <div>
                  <FaPhoneAlt />
                  <FaVideo />
                </div>
              </div>
              <div className={styles.user_info_container}>
                <div className={styles.img_container}>
                  <Image
                    src={element.userImage}
                    width={50}
                    height={50}
                    alt='fake-example-img'
                  />
                </div>
                <span className={styles.user_info}>{element.userName}</span>
              </div>
              {element.messages.map((message, index) => (
                <span
                  className={
                    message.sender === 'user' ? styles.user : styles.employee
                  }
                  key={index}>
                  {message.message}
                </span>
              ))}
              <div className={styles.chat_options_bottom}>
                <div>
                  <FaCamera />
                  <FaImage />
                  <FaMicrophone />
                </div>
                <FaSmile
                  style={{ position: 'absolute', right: '1.5em', zIndex: '1' }}
                />
                <IoSend />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
