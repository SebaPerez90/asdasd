import Image from 'next/image';
import styles from './Footer.module.css';
import members from '@/assets/images/members.png';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.subdiv_container}>
        <div className={styles.text_container}>
          <h1>
            <strong>Únete a nosotros</strong> para potenciar tu perfil
            profesional o encontrar al profesional que necesitas.
          </h1>
          <p>
            Recuerda que esta plataforma se mejora continuamente gracias a tus
            sugerencias.
          </p>
          <div className={styles.btns_container}>
            <button>Haz una sugerencia</button>
            <button>Únete ahora</button>
          </div>
        </div>
        <div className={styles.image_container}>
          <Image
            src={members}
            alt='members-img'
          />
        </div>
      </div>
      <div className={styles.bottom_section_container}>
        <div className={styles.logo_container}>
          <h2>EaseHire</h2>
          <p>Nosotros simplificamos el proceso 🚀</p>
          <span>EaseHire Company © 2024 | easehire@gmail.com</span>
        </div>
        <div className={styles.ul_container}>
          <ul>
            <span>Company</span>
            <li>Preguntas frecuentes</li>
            <li>Nosotros</li>
            <li>Contactanos</li>
          </ul>
          <ul>
            <span>Usuarios</span>
            <li>Publica tu servicio</li>
            <li>Profesionales</li>
            <li>Trabajos</li>
          </ul>
          <ul>
            <span>Sobre nosotros</span>
            <li>Seba Perez</li>
            <li>Dami Garbarini</li>
            <li>Apoya el proyecto</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
