import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../../Services/AuthService';
import { withRouter } from 'react-router';
import Message from '../message/Message';
import './Auth.scss';

const SignUp = ({ history }) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID)
    }
  }, []);

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleSignup = (e) => {
    e.preventDefault();
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      resetForm();

      if (!message.msgError) {
        timerID = setTimeout(() => {
          history.push('/login');
        }, 2000);
      };
    });
  };

  const resetForm = ()=>{
    setUser({username: '', password: ''});
  };
  
  return (
    <div>
      <div className="login">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <input onChange={onChange} name="username" type="email" placeholder="Email" />
          <input onChange={onChange} name="password" type="password" placeholder="Password" />
          <button type="submit">Sign up</button>
        </form>
        
        { message ? <Message message={message}/> : null }
      </div>
    </div>
  );
};

export default withRouter(SignUp);