import styles from './LoginModal.module.css';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import app_icon from '@/assets/images/icon-app.png';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { LuEye } from 'react-icons/lu';
import { LuEyeOff } from 'react-icons/lu';

interface LoginModalProps {
  modalViewController: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ modalViewController }) => {
  const router = useRouter();
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <motion.div className={styles.wraper_modal}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className={styles.modal}>
        <div className={styles.logo_container}>
          <Image
            src={app_icon}
            width={38}
            height={38}
            priority
            alt='app_icon'
          />
          <span>EaseHire</span>
        </div>
        <button
          onClick={() => signIn('google')}
          className={styles.google_provider_btn}>
          <FcGoogle />
          Accede con Google
        </button>
        <span
          style={{
            textAlign: 'center',
            fontSize: '1.5em',
            lineHeight: '1.5em',
          }}>
          o <br></br>Accede a tu cuenta
        </span>
        <form
          name='login-form'
          className={styles.form}>
          <label
            htmlFor='email'
            className={styles.labels}>
            <input
              required={true}
              autoFocus
              autoComplete='off'
              type='text'
              name='email'
              id='email'
              placeholder='Correo electrónico'
              className={styles.input}
            />
          </label>
          <label
            htmlFor='password'
            className={styles.labels}>
            <input
              required={true}
              autoComplete='off'
              type={hidePassword ? 'password' : 'text'}
              name='password'
              id='password'
              placeholder='Password'
              className={styles.input}
            />
            <span
              onClick={() => setHidePassword(!hidePassword)}
              className={styles.hide_password_btn}>
              {hidePassword ? <LuEyeOff /> : <LuEye />}
            </span>
          </label>
          <button className={styles.send_form_btn}>Enviar</button>
        </form>
        <p>
          ¿Aún no tienes una cuenta?{' '}
          <strong
            onClick={() => router.push('/auth')}
            className={styles.register_redirect_link}>
            Regístrate aquí
          </strong>
        </p>
        <button
          onClick={modalViewController}
          className={styles.close_btn}>
          X
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
