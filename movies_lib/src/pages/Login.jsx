// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Aqui você pode implementar a lógica real de login, como enviar a requisição para o servidor

    // Simulando um login bem-sucedido
    const loggedIn = true;

    if (loggedIn) {
      navigate('/'); // Redireciona para a página principal após o login
    } else {
      alert('Login falhou. Verifique suas credenciais.');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Ainda não tem uma conta? <Link to="/signup">Cadastrar-se</Link>
      </p>
    </div>
  );
};

export default Login;
