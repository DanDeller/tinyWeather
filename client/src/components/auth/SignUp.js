import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../../services/AuthService';
import { withRouter } from 'react-router';
import Message from '../message/Message';
import './Auth.scss';

const SignUp = ({ history }) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!user.username.length || !user.password.length) {
      const message = {
        msgBody: 'Add info first.'
      };
      setMessage(message);
      ref.current(message);
      return;
    };

    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      ref.current(message);
      resetForm();

      if (!message.msgError) {
        timerID = setTimeout(() => {
          history.push('/login');
        }, 1000);
      };
    });
  };

  const resetForm = () => {
    setUser({username: '', password: ''});
  };
  
  return (
    <div className="login-signup-wrap">
      <h2>Sign Up</h2>
      <p>New to the app? Sign up below to get started.</p>
      <div className="login">
        <form onSubmit={handleSignup}>
          <input onChange={onChange} name="username" type="email" placeholder="Email" />
          <input onChange={onChange} name="password" type="password" placeholder="Password" />
          <button type="submit">Sign up</button>
        </form>
      </div>
      <Message children={add => (ref.current = add)} message={message} />
    </div>
  );
};

export default withRouter(SignUp);