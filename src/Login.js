import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can add authentication logic or simply trigger the parent component to switch views
    onLogin();
  };

  return (
    <div className="container">
      <h1>MotorData - Car Tracking</h1>
      <img className="imagen" src="../images/Logo.jpg" alt="Logo" />
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;