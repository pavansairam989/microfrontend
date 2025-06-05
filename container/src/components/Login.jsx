import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onLogin({ username, password });
    
    if (!success) {
      setError('Invalid credentials. Try any non-empty username and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Micro Frontend Demo</h2>
        <h3>Login</h3>
        
        {error && <div className="error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;