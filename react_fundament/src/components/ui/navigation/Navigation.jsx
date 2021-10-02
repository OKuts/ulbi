import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import st from './Navigation.module.css';
import {MyButton} from "../button/MyButton";
import {AuthContext} from "../../../context";

export const Navigation = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);
  if (!isAuth) return <></>;

  const exit = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className={st.navbar}>
      <Link to='/about' children='About'/>
      <Link to='/posts' children='Posts'/>
      <MyButton onClick={exit}>Exit</MyButton>
    </div>
  );
};
