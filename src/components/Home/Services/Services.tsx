import styles from './Services.module.css';
import Image from 'next/image';
import join_us from '@/assets/images/join-us.jpg';

const Services = () => {
  return (
    <div className={styles.services_container}>
      <div className={styles.services_text}>
        <h1>
          ¿Quieres ofrecer servicios en <strong>EaseHire</strong>?{' '}
        </h1>
        <p>
          Crea tu perfil y publica tus anuncios gratuitamente. Sólo te
          retendremos una pequeña comisión cuando ganes dinero. <br></br>
          <br></br>Miles de clientes te esperan. ¡Únete en 5 minutos!
        </p>
        <button className={styles.join_us_btn}>Ofrecer Servicios</button>
      </div>
      <div className={styles.img_container}>
        <Image
          src={join_us}
          alt='join_us_img'
        />
      </div>
    </div>
  );
};

export default Services;
