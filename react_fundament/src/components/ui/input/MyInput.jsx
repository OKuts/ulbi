import React from 'react';
import st from './MyInput.module.css';

export const MyInput = (props) => {
  return (
    <input {...props} className={st.inp}/>
  );
};
