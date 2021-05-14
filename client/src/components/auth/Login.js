import React, { useContext, useCallback, useState, useRef } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { withRouter, Redirect } from 'react-router';
import app from '../../base.js';
import './Auth.css';

const Message = React.lazy(() => import('../message/Message'));

const Login = ({ history }) => {
  const [user, setUser] = useState({username: '', password: ''});
  const [message, setMessage] = useState(null);
  const ref = useRef(null);

  const onChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  };
  
  return (
    <div className="login-signup-wrap">
      <h2>Log in</h2>
      <p>Already a user? Go ahead and log in here.</p>
      <div className="login">
      <form onSubmit={handleLogin}>
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button type="submit">Log in</button>
        </form>
      </div>
      <Message children={add => (ref.current = add)} message={message}/>
    </div>
  );
};

export default withRouter(Login);