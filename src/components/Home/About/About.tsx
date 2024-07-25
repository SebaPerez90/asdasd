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
        <div className={styles.benefits}>
          <div>
            <h3>pepe</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-hand-click'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#00abfb'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5' />
              <path d='M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5' />
              <path d='M14 10.5a1.5 1.5 0 0 1 3 0v1.5' />
              <path d='M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47' />
              <path d='M5 3l-1 -1' />
              <path d='M4 7h-1' />
              <path d='M14 3l1 -1' />
              <path d='M15 6h1' />
            </svg>
          </div>
          <div>
            <h3>pepe</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-pig-money'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#00abfb'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M15 11v.01' />
              <path d='M5.173 8.378a3 3 0 1 1 4.656 -1.377' />
              <path d='M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z' />
            </svg>
          </div>
          <div>
            <h3>pepe</h3>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-discount-check'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#00abfb'
              fill='none'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M5 7.2a2.2 2.2 0 0 1 2.2 -2.2h1a2.2 2.2 0 0 0 1.55 -.64l.7 -.7a2.2 2.2 0 0 1 3.12 0l.7 .7c.412 .41 .97 .64 1.55 .64h1a2.2 2.2 0 0 1 2.2 2.2v1c0 .58 .23 1.138 .64 1.55l.7 .7a2.2 2.2 0 0 1 0 3.12l-.7 .7a2.2 2.2 0 0 0 -.64 1.55v1a2.2 2.2 0 0 1 -2.2 2.2h-1a2.2 2.2 0 0 0 -1.55 .64l-.7 .7a2.2 2.2 0 0 1 -3.12 0l-.7 -.7a2.2 2.2 0 0 0 -1.55 -.64h-1a2.2 2.2 0 0 1 -2.2 -2.2v-1a2.2 2.2 0 0 0 -.64 -1.55l-.7 -.7a2.2 2.2 0 0 1 0 -3.12l.7 -.7a2.2 2.2 0 0 0 .64 -1.55v-1' />
              <path d='M9 12l2 2l4 -4' />
            </svg>
          </div>
        </div>
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
