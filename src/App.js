import './App.css';
import { useState } from 'react';

export default function MyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
    console.log(email, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email: <input value={email} onChange={handleEmailChange} type='text' />
      </label>
      <label>
        Pasword:{' '}
        <input value={password} onChange={handlePasswordChange} type='text' />
      </label>
      <button type='submit'>Enter</button>
    </form>
  );
}
