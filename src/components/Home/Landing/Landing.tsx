import Members from '../Members/Members';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_description}>
        <h1 className={styles.title}>¡Encontrar ayuda confiable nunca fue tan fácil y seguro!</h1>

        <p className={styles.paragraph}>
          ¿Alguna vez necesitaste un albañil para las tareas cotidianas del
          hogar? Estás en el lugar indicado. Con solo unos pocos clics, conecta
          con profesionales capacitados que cumplen con tus necesidades.
        </p>
        <div className={styles.buttons_container}>
          <button className={styles.posts_btn}>publicaciones</button>
          <button className={styles.talents_btn}>busca profesionales</button>
        </div>
      </div>
      <Members />
    </div>
  );
};
export default Landing;
