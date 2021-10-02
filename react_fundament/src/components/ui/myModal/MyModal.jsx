import React from 'react';
import st from './MyMoldal.module.css';
export const MyModal = ({children, visible, setVisible}) => {
  const rootClass = [st.myModal];
  if (visible) rootClass.push(st.active);

  return (
    <div
      onClick={() => setVisible(false)}
      className={rootClass.join(' ')}>
      <div
        onClick={e => e.stopPropagation()}
        className={st.myModalContent}>
        {children}
      </div>
    </div>
  );
};
