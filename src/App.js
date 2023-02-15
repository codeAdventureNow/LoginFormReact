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
      setEmail('');
      setPassword('');
      console.log(email, password);
    }
  }

  return (
    <div className='wrapper'>
      <h1>Sign In</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className='inputs'>
          <label>
            <b>Email: </b>
            <input
              placeholder='email'
              value={email}
              onChange={handleEmailChange}
              type='text'
            />
          </label>
          <label>
            <b> Password: </b>

            <input
              placeholder='password'
              value={password}
              onChange={handlePasswordChange}
              type='text'
            />
          </label>
        </div>
        <div className='button'>
          <button type='submit'>Enter</button>
        </div>
      </form>
      <div>
        <p> {password.length > 4 ? '' : message}</p>
      </div>
    </div>
  );
}
