import React from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.container_todo}>
      <div className={styles.container_text}></div>
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
              type='text'
              name='text'
              id='username'
            />
            <label htmlFor='email'>Email</label>
          </div>
          <div className={styles.input_field}>
            <input
              required={true}
              autoComplete='off'
              type='text'
              name='text'
              id='username'
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
