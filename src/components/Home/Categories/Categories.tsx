'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './Categories.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';

const Categories = () => {
  const images = [
    '/imgs/service2.jpg',
    '/imgs/service4.jpg',
    '/imgs/service5.jpg',
    '/imgs/service6.jpg',
    '/imgs/service7.jpg',
    '/imgs/service8.jpg',
    '/imgs/service9.jpg',
  ];

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect='fade'
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      autoplay={{ delay: 1000 }}
      className={styles.categories_container}>
      {images.map((item, index) => (
        <SwiperSlide
          className={styles.img_container}
          key={index}>
          <Image
            width={1500}
            height={1500}
            src={item}
            alt='categories-images'
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Categories;
/*
<Swiper
        modules={[Autoplay, Navigation]}
        slidesPerView={1}
        spaceBetween={12}
        autoplay={{ delay: 6000, pauseOnMouseEnter: true }}
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
      </Swiper>
*/
