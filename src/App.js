import './App.css';
import { useState } from 'react';

export default function MyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    if (password.length > 4) {
      setPasswordError('');
    }
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 5 || password === '') {
      setPasswordError('Password must be 5 characters or more.');
    } else {
      setSuccessMessage('Sign in succesful!');
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
            <p>Email: </p>
            <input
              placeholder='Email'
              value={email}
              onChange={handleEmailChange}
              type='email'
              required
            />
          </label>
          <label>
            <p> Password: </p>

            <input
              placeholder='Password'
              value={password}
              onChange={handlePasswordChange}
              type='password'
              required
            />
          </label>
        </div>
        {passwordError && <p className='errorMessage'>{passwordError}</p>}
        <div className='button'>
          <button type='submit'>Sign In</button>
        </div>
      </form>
      <div className='message'>
        <p>{successMessage}</p>
      </div>
    </div>
  );
}
