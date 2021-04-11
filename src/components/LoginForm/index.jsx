import { useState } from 'react';
import axios from 'axios';

import './styles.css';

const projectID = '9333d978-991f-45b3-a0a9-87215048356a';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': projectID,
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
      setError('');
    } catch (err) {
      setError('Oops, credenciais incorredas.');
    }
  };

  return (
    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div className="box">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="container">
          <div className="form">
            <h1>Chat Real Time</h1>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Usuário"
                  required
                />
              </div>
              <div className="inputBox">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                  required
                />
              </div>
              <div className="inputBox">
                <input type="submit" value="Entrar" />
              </div>
            </form>
            <h2>{error}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
