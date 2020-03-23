import React, { useState, useCallback } from 'react';
// Hooks
import { useDispatch } from 'react-redux';
// Components
import Input from '00-components/Input';
import Button from '00-components/Button';
// Types
import { InputOnChange } from 'ComponentTypes';
// Side Effects
import { login } from '05-sideEffects/user';
// Styles
import './Login.css';


const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');

  const dispatch = useDispatch();

  const handleChange = useCallback<InputOnChange>((evt) => {
    const value = evt.target.value;
    setUsername(value);
  }, []);

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (evt) => {
      evt.preventDefault();
      dispatch(login(username))
    },
    [username, dispatch]
  );

  return (
    <div className="Login">
      <div className="Login-form">
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <Input value={username} name="login" onChange={handleChange} />
          <Button type="submit">
            Login with Github
          </Button>
        </form>
      </div>
    </div>
  )
};

export default Login;
