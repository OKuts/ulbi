import React, {useContext} from 'react';
import {MyInput} from '../components/ui/input/MyInput';
import {MyButton} from '../components/ui/button/MyButton';
import {AuthContext} from '../context';

export const Login = () => {
  const {setIsAuth} = useContext(AuthContext);

  const submitForm = e => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
  }

  return (
    <div className='App'>
      <h1>Login form</h1>
      <form onSubmit={submitForm}>
        <MyInput type='text' placeholder='Login'/>
        <MyInput type='password' value='1' placeholder='Password'/>
        <MyButton>In</MyButton>
      </form>
    </div>
  );
};
