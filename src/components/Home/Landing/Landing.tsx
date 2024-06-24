import Members from '../Members/Members';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.about_app}>
        <h1>Nunca antes fue tan sencillo y seguro encontrar alguien que cumpla con tus necesidades</h1>
        <p>si alguna vez necesitaste alguien que te ayudara con los que haceres de la vida cotidiana, como un electricista, cerrajero , albañil. Estas en el lugar indicado! solo necesitas un par de clicks y listo</p>
      </div>
      <Members />
    </div>
  );
};

export default Landing;
