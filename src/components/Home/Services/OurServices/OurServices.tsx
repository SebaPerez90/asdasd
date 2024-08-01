import Image from 'next/image';
import styles from './OurServices.module.css';
import categories from '@/utils/categories-mock.json';

const OurServices = () => {
  return (
    <div className={styles.our_services_container}>
      <h1>Nuestros Servicios</h1>
      <p>
        Explora las categorías con mayor demanda. Puedes sugerir nuevas
        categorías contactándonos.
      </p>
      <div className={styles.grid_container}>
        {categories.map((category, index) => (
          <div
            className={styles.grid_item}
            key={index}>
            <div className={styles.img_container}>
              <Image
                width={500}
                height={500}
                src={category.image}
                alt='categorie-img'
              />
            </div>
            <h3>{category.categoria}</h3>
            <ul>
              <span>+</span>
              {category.profesiones.map((profession, index) => (
                <li key={index}>{profession}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
