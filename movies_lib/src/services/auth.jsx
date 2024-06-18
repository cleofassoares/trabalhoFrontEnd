// auth.js

// Função para registrar um novo usuário
export const registerUser = (username, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const isExistingUser = existingUsers.some(user => user.username === username);
  
    if (isExistingUser) {
      throw new Error('Username already exists. Please choose a different username.');
    }
  
    const newUser = { username, password };
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };
  
  // Função para autenticar um usuário
  export const authenticateUser = (username, password) => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.username === username && user.password === password);
  
    if (user) {
      return { username: user.username }; // Retorna o usuário autenticado
    }
  
    return null; // Credenciais inválidas
  };
  