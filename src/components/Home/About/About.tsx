import styles from './About.module.css';
import chats from '@/utils/fake-chats-mock.json';
import { IoSend } from 'react-icons/io5';

const About = () => {
  return (
    <section className={styles.services_container}>
      <div className={styles.about_container}>
        <h1>
          ¿Por qué <strong>elegirnos</strong>?
        </h1>
        <p className={styles.about_parragraph}>
          Nos diferenciamos de otras plataformas que solo se enfocan en trabajos
          fijos y con mucha burocracia de por medio. Si quieres agrandar tu
          casa, agregar un ambiente o tienes un problema con una llave y
          necesitas un electricista o un plomero, ¿realmente tienes tiempo para
          tanta burocracia? Nuestra app te conecta con personas que pueden
          resolver ese problema específico conectándote con un especialista en
          el tema.
          <br></br>
          <br></br>
          Como prestador de servicios, administras tu tiempo y tarifa por hora
          según tu disponibilidad. Nosotros nos encargamos de conectar personas
          con un plus de seguridad que otros marketplaces no ofrecen.
        </p>
      </div>
      <div className={styles.experiences_container}>
        <h1 className={styles.experiences_title}>
          ¿Te identificas con alguna de estas malas experiencias?
        </h1>
        <div className={styles.experiences}>
          {chats.map((element, index) => (
            <div
              className={styles.message_container}
              key={index}>
              {element.messages.map((message, index) => (
                <span
                  className={
                    message.sender === 'user' ? styles.user : styles.employee
                  }
                  key={index}>
                  {message.message}
                </span>
              ))}
              <div className={styles.writing_bar}>
                <IoSend />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
