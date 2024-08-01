import Image from 'next/image';
import styles from './GetService.module.css';
import get_services from '@/assets/images/get_services.jpg';

const GetService = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.services_text}>
        <h1>
          En <strong>EaseHire</strong> nos preocupamos por tus necesidades
        </h1>
        <p>
          Contamos con una gran variedad de profesionales de diversas áreas listos para poder brindarte su servicio.<br></br>
          <br></br>Miles de clientes te esperan. ¡Únete en 5 minutos!
        </p>
        <button className={styles.join_us_btn}>Encuentra tu Servicio</button>
      </div>
      <div className={styles.img_container}>
        <Image
          src={get_services}
          alt='get_services_img'
        />
      </div>
    </div>
  );
};

export default GetService;
