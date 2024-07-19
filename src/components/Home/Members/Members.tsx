'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Members.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import logo from '@/assets/svg/logo.svg';
import pic from '@/assets/images/mujer-joven-concentrada-que-trabaja-cafe-favorito-filmacion-interiores-encantadora-estudiante-seria-usando-laptop_197531-17205.jpg';

const Members = () => {
  return (
    <div className={styles.members}>
      <div className={styles.img_container}>
        <Image
          src={pic}
          alt='logo'
          className={styles.img}
        />
      </div>
      {/* <Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={15}
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        className={styles.swiper_container}>
        <SwiperSlide className={styles.swiper_card}>
          Conéctate con expertos verificados en minutos. ¡Deja atrás las
          incertidumbres y disfruta de la tranquilidad!
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_card}>
          Cada profesional en nuestra app ha sido evaluado por la comunidad.
          ¡Confianza y calidad garantizadas!
        </SwiperSlide>
        <SwiperSlide className={styles.swiper_card}>
          Regístrate en solo unos pasos y encuentra la solución perfecta para
          tus necesidades del hogar.
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default Members;
