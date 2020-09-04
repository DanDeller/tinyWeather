import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
// import app from '../../base';

const SignUp = ({history}) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      // await app
      //   .auth()
      //   .createUserWithEmailAndPassword(email.value, password.value);
      // history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className='signup'>
      <h2>Sign up</h2>
      <form onSubmit={handleSignUp}>
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);