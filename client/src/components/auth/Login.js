import * as actions from '../../redux/actions/isAuthenticated';
import React, { useContext, useState, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import AuthService from '../../services/AuthService';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import './Auth.css';

const Message = React.lazy(() => import('../message/Message'));

const Login = ({ history }) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [message, setMessage] = useState(null);
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user.username.length || !user.password.length) {
      const message = {
        msgBody: 'Add info first.'
      };
      setMessage(message);
      ref.current(message);
      return;
    };

    AuthService.login(user).then((data) => {
      const { isAuthenticated, user, message, id, token } = data;
      const expiresIn = new Date(new Date().getTime() + 60000);

      if (isAuthenticated) {
        const payload = {
          token: token,
          isAuthenticated: isAuthenticated,
          id: id
        };

        localStorage.setItem('tinyWeatherToken', token);
        localStorage.setItem('expirationDate', expiresIn);
        
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);

        dispatch(actions.setAuth(payload));
        history.push('/');
      } else {
        setMessage(message);
        ref.current(message);
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
      </div>
      <Message children={add => (ref.current = add)} message={message}/>
    </div>
  );
};

export default withRouter(Login);