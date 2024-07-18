import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container_todo}>
      <div className={styles.container_text}>
        <h1>If you have any questions or suggestions?</h1>
        <samp>If you have any questions or suggestions, do not hesitate to contact us.
        We will evaluate it and carry it out</samp>
      </div>
      <div className={styles.container_form}>
        <div className={styles.heading}>
          <h1>Contact us</h1>
        </div>
        <form
          className={styles.form}
          action=''>
          <div className={styles.input_field}>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='text'
              id='username'
            />
            <label htmlFor='username'>Full Name</label>
          </div>
          <div className={styles.input_field}>
            <input
              required={true}
              autoComplete='off'
              type='text-area'
              name='text'
              id='email'
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className={styles.input_field}>
            <textarea
              required={true}
              autoComplete='off'
              name='text'
              id='description'
            />
            <label htmlFor='username'>Message</label>
          </div>

          <div className={styles.btn_container}>
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
