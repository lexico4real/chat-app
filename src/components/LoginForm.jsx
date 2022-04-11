import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authObject = {
      'Project-ID': '093ab0d6-d57c-4f47-8ca5-c27212521a20',
      'User-Name': username,
      'User-Secret': password,
    };
    try {
      await axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
    } catch (error) {}
  };
  return (
    <div className='wrapper'>
      <div className='form'>
        <div className='title'>
          <h1>chat App</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='input'
              required
            />
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input'
              required
            />
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
