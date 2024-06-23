import Members from '../Members/Members';
import styles from './Landing.module.css';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.about_app}>Landing</div>
      <Members />
    </div>
  );
};

export default Landing;
