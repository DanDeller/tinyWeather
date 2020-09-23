import { AuthContext } from '../../Context/AuthContext';
import AuthService from '../../Services/AuthService';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import Message from '../message/Message';
import './Auth.scss';

const Login = ({ history }) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message } = data;

      if (isAuthenticated) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        history.push('/');
      } else {
        setMessage(message);
      }
    });
  };
  
  return (
    <div>
      <div className="login">
        <h2>Log in</h2>
        <form onSubmit={handleLogin}>
          <input onChange={onChange} name="username" type="email" placeholder="Email" />
          <input onChange={onChange} name="password" type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
        
        { message ? <Message message={message}/> : null }
      </div>
    </div>
  );
};

export default withRouter(Login);