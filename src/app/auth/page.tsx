'use client';

import { signIn, useSession } from 'next-auth/react';

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    alert('logeado');
  } else {
    alert('no logeado');
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#121212',
      }}>
      <div
        style={{
          width: '400px',
          padding: '2rem',
          backgroundColor: '#1c1c1c',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
        }}>
        <h1
          style={{ color: '#fff', textAlign: 'center', marginBottom: '2rem' }}>
          Sign In to Render
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1rem',
          }}>
          <button
            onClick={() => signIn('google')}
            style={buttonStyle}>
            Google
          </button>
        </div>
        <p style={{ color: '#ccc', textAlign: 'center', margin: '1rem 0' }}>
          orrrrr
        </p>
        <form>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={labelStyle}
              htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              style={inputStyle}
              placeholder='your@email.com'
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={labelStyle}
              htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              name='password'
              style={inputStyle}
              placeholder='correct horse battery staple'
            />
          </div>
          <button
            type='submit'
            style={{ ...buttonStyle, width: '100%', marginTop: '1rem' }}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

const buttonStyle: React.CSSProperties = {
  padding: '0.5rem 1rem',
  backgroundColor: '#333',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  flex: '1',
  margin: '0 0.5rem',
  textAlign: 'center',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.5rem',
  backgroundColor: '#222',
  color: '#fff',
  border: '1px solid #444',
  borderRadius: '4px',
};

const labelStyle: React.CSSProperties = {
  color: '#ccc',
  display: 'block',
  marginBottom: '0.5rem',
};
