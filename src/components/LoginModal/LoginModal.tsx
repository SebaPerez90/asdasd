import styles from './LoginModal.module.css';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import app_icon from '@/assets/images/icon-app.png';

interface LoginModalProps {
  modalViewController: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ modalViewController }) => {
  return (
    <motion.div className={styles.wraper_modal}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className='flex items-center justify-evenly flex-col relative h-[39em]'>
        <div className='flex flex-col items-center gap-3'>
          <div className='flex items-center'>
            <Image
              src={app_icon}
              width={25}
              height={25}
              priority
              alt='app_icon'
            />
            <span className='text-base-200 text-2xl font-bold [filter:brightness(1.2)]'>
              SwiftCart
            </span>
          </div>
          <h3 className='text-white text-4xl font-bold'>Inicia Sesión</h3>
          <span className='text-slate-400 '>
            Accede a tu cuenta de SwiftCart
          </span>
        </div>
        <button onClick={() => signIn('google')}>Accede con Google</button>
        <form
          name='contact-form'
          method='POST'
          //   onSubmit={succesMessage}
          className='flex flex-col justify-around gap-9 w-[27em]'>
          <div className='relative w-full input_field_container_login'>
            <input
              required={true}
              autoComplete='off'
              //   type={hidePassword ? 'password' : 'text'}
              name='password'
              id='password'
              maxLength={15}
              //   onChange={(e) => {
              //     captureValues(e);
              //   }}
              className='text-xl border-slate-500 outline-none bg-zinc-800 duration-300 border text-slate-200 rounded-lg w-full focus:bg-base-300/70 font-medium p-4'
            />
            <label
              htmlFor='password'
              className='absolute  text-slate-400/70 left-8 top-5 text-lg duration-300'>
              Contraseña
            </label>
            <span
              //   onClick={() => setHidePassword(!hidePassword)}
              className='absolute bottom-5 text-2xl right-6 cursor-pointer text-slate-50'>
              {/* {hidePassword ? <LuEyeOff /> : <LuEye />} */}
            </span>
          </div>
          <div className='relative w-full input_field_container_login'>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='email'
              id='email'
              //   onChange={(e) => {
              //     captureValues(e);
              //   }}
              className='text-xl border-slate-500 outline-none bg-zinc-800 duration-300 border text-slate-200 rounded-lg w-full focus:bg-base-300/70 font-medium p-4 lowercase'
            />
            <label
              htmlFor='email'
              className='absolute text-slate-400/70 left-8 top-5 text-lg duration-300'>
              Correo electrónico
            </label>
          </div>
          <div className='flex items-center flex-col gap-8 mt-6'>
            <label
              htmlFor='checkbox'
              className='ml-2 text-slate-200 text-lg flex items-center gap-3 self-start'>
              <input
                id='checkbox'
                type='checkbox'
                name='checkbox'
                className='scale-150'
              />
              Recuérdame en este equipo
            </label>
            <button
              //   ref={send_btn}
              type='submit'
              //   onClick={succesMessage}
              className='w-1/2 btn_disabled'>
              Enviar
            </button>
            <p className='text-slate-200 text-lg'>
              ¿Aún no tienes una cuenta?{' '}
              <strong
                // onClick={() => router.push('/auth')}
                className='text-base-200 cursor-pointer hover:text-base-300 duration-200'>
                Regístrate aquí
              </strong>
            </p>
          </div>
        </form>
        <button
          onClick={modalViewController}
          className='absolute right-6 top-6 text-slate-400 hover:text-white duration-200 font-extrabold text-xl'>
          X
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LoginModal;
