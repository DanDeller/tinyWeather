import React, { useState, useCallback, useRef, useEffect } from 'react';
// import AuthService from '../../services/AuthService';
import { withRouter } from 'react-router';
import './Auth.css';

import app from '../../base.js';

const Message = React.lazy(() => import('../message/Message'));

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

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  // const resetForm = () => {
  //   setUser({username: '', password: ''});
  // };
  
  return (
    <div className="login-signup-wrap">
      <h2>Sign Up</h2>
      <p>New to the app? Sign up below to get started.</p>
      <div className="login">
      <form onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
      </div>
      <Message children={add => (ref.current = add)} message={message} />
    </div>
  );
};

export default withRouter(SignUp);