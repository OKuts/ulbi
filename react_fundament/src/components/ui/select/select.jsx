import React from 'react';
import st from './select.module.css';

export const Select = ({options, defaultValue, onChangeSelect, selectValue}) => {
  return (
    <select
      className={st.select}
      value={selectValue}
      onChange={event => onChangeSelect(event.target.value)}>
      <option disabled value={defaultValue}>{defaultValue}</option>
      {options.map(option => <option key={option.name} value={option.value}>{option.name}</option>)}
    </select>
  );
};
