import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password.length >= 8) {
      try {
        // Chamar a API de autenticação
        const response = await fetch('=https://api.themoviedb.org/3/movie', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Salva o token no localStorage ou em um estado global (ex. Context API)
          localStorage.setItem('token', data.token);
          onLogin();
          navigate('/characters');
        } else {
          setError(data.message || 'Erro ao fazer login');
        }
      } catch (error) {
        setError('Erro ao fazer login. Tente novamente mais tarde.');
      }
    } else {
      setError('Atenção, sua senha precisa conter no mínimo 8 caracteres');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={!email || password.length < 8}>
          Entrar
        </button>
        {error && (
          <div className="notification">
            <img src="https://img.icons8.com/color/48/000000/error--v1.png" alt="Error" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
