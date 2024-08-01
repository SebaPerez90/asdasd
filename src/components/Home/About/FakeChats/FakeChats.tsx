import styles from './FakeChats.module.css';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import chats from '@/utils/fake-chats-mock.json';
import { IoSend } from 'react-icons/io5';
import { FaCamera } from 'react-icons/fa';
import { FaSmile } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';
import Image from 'next/image';
import { useLanguageStore } from '@/context/language-store';

const FakeChats = () => {
  const { language } = useLanguageStore();

  return (
    <div className={styles.experiences_container}>
      <div className={styles.experiences_text}>
        <div>
          <h1>
            {language === 'english'
              ? 'Do you identify with any of these '
              : '¿Te identificas con alguna de estas '}
            <strong>
              {language === 'english'
                ? 'bad experiences'
                : 'malas experiencias'}
            </strong>
            ?
          </h1>
          <p>
            Sin conocer tu respuesta seguramente fuiste victima de alguna 😅. Estos suelen ser casos muy comunes:
          </p>
        </div>
        <ul>
          <li>Pedir precio por privado, haciendote perder tiempo.</li>
          <li>No conocer si el perfil del usuario es real.</li>
          <li>No tener referencias reales del prestador de servicio.</li>
          <li>Usuarios con informacion del perfil incompleta o dudosa.</li>
        </ul>
      </div>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={12}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        className={styles.chats_container}>
        {chats.map((element, index) => (
          <SwiperSlide
            className={styles.chat_box}
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
                  width={150}
                  height={150}
                  alt='fake-example-img'
                />
              </div>
              <span className={styles.user_info}>{element.userName}</span>
            </div>
            {element.messages.map((message, index) => (
              <p
                className={
                  message.sender === 'user' ? styles.user : styles.employee
                }
                key={index}>
                {message.message}
              </p>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FakeChats;
