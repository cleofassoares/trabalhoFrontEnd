import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password.length >= 8) {
            onLogin();
            navigate('/characters');
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