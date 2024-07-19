'use client';

import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Members.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import pic from '@/assets/images/pic.jpg';
import pic2 from '@/assets/images/pic2.jpg';
import pic3 from '@/assets/images/pic3.jpg';
import pic4 from '@/assets/images/pic4.jpg';
import { useEffect, useState } from 'react';

const Members = () => {
  const [currentImg, setCurrentImg] = useState(pic);

  useEffect(() => {
    const number = Math.round(Math.random() * 4);
    switch (number) {
      case 1:
        return setCurrentImg(pic);
      case 2:
        return setCurrentImg(pic2);
      case 3:
        return setCurrentImg(pic3);
      case 4:
        return setCurrentImg(pic4);
    }
  }, []);

  return (
    <div className={styles.members}>
      <div className={styles.img_container}>
        <Image
          src={currentImg}
          alt='logo'
          className={styles.img}
        />
      </div>
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
    </div>
  );
};

export default Members;
