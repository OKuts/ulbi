import React from 'react';
import {Link} from "react-router-dom";
import st from './Navigation.module.css';

export const Navigation = () => {
  return (
    <div className={st.navbar}>
      <Link to='/about' children='About'/>
      <Link to='/posts' children='Posts'/>
    </div>
  );
};
