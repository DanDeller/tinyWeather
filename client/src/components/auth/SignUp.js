import React, { useState, useCallback, useRef, useEffect } from 'react';
import { withRouter } from 'react-router';
import app from '../../base.js';
import './Auth.css';

const Message = React.lazy(() => import('../message/Message'));

const SignUp = ({ history }) => {
  const [message, setMessage] = useState(null);
  let timerID = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      const { message } = error;
      setMessage(message);
      ref.current(message);
    }
  }, [history]);
  
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