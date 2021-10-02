import React from 'react';
import {MyInput} from "../components/ui/input/MyInput";
import {MyButton} from "../components/ui/button/MyButton";

export const Login = () => {
  return (
    <div className='App'>
      <h1>Login form</h1>
      <form>
        <MyInput type='text' placeholder='Login'/>
        <MyInput type='password' placeholder='Password'/>
        <MyButton>In</MyButton>
      </form>
    </div>
  );
};
