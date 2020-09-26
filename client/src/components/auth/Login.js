import * as actions from '../../redux/actions/isAuthenticated';
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../../services/AuthService';
import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import Message from '../message/Message';
import './Auth.scss';

import { useDispatch } from 'react-redux';

const Login = ({ history }) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(user).then((data) => {
      const expiresIn = new Date(new Date().getTime() + 60000);
      const { isAuthenticated, user, message, id, token } = data;

      if (isAuthenticated) {
        localStorage.setItem('expirationDate', expiresIn);
        localStorage.setItem('tinyWeatherToken', token);

        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);

        dispatch(actions.setTokenId(token));
        dispatch(actions.setIsAuthenticated(isAuthenticated));
        dispatch(actions.setUserId(id));
        history.push('/');
      } else {
        setMessage(message);
      }
    });
  };
  
  return (
    <div className="login-signup-wrap">
      <h2>Log in</h2>
      <p>Already a user? Go ahead and log in here.</p>
      <div className="login">
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