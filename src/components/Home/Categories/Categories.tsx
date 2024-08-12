'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './Categories.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Image from 'next/image';
import { useThemeStore } from '@/context/theme-store';

const Categories = () => {
  const { theme } = useThemeStore();

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
    <>
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
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
      <div
        className={
          theme === 'dark'
            ? styles.categories_container_mobile_dark
            : styles.categories_container_mobile
        }>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Categories;
