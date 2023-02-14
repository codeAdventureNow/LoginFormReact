import './App.css';
import { useState } from 'react';

export default function MyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleEmailChange(e) {
    e.preventDefault();

    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    setMessage('');

    if (email === '') {
      setMessage('Please enter your email.');
    } else if (!regex.test(email)) {
      setMessage('Please enter a valid email');
    } else if (password.length < 5 || password === '') {
      setMessage('Your password must be more than 4 characters');
    } else {
      setMessage('You are registered!');
    }

    console.log(email, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{' '}
          <input value={email} onChange={handleEmailChange} type='text' />
        </label>
        <label>
          Pasword:{' '}
          <input value={password} onChange={handlePasswordChange} type='text' />
        </label>
        <button type='submit'>Enter</button>
      </form>
      <p> {message}</p>
    </div>
  );
}
