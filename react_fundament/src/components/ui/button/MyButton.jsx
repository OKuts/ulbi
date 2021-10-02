import React from 'react';
import st from './MyButton.module.css';

export const MyButton = ({children, ...props}) => {
  return (
    <button
      {...props}
      type='button'
      className={st.btn}>
      {children}
    </button>
  );
};
