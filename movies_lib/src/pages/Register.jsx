import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Verifica se já existe um usuário com o mesmo nome
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isExistingUser = existingUsers.some(user => user.username === username);

    if (isExistingUser) {
      setError('Username already exists. Please choose a different username.');
      return;
    }

    // Adiciona o novo usuário ao localStorage
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Redireciona para a página de login após o registro
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default Register;
