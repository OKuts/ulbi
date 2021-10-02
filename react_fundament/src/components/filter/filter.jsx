import React from 'react';
import {MyInput} from "../ui/input/MyInput";
import {Select} from "../ui/select/select";

const options = [
  {value: '', name: 'None'},
  {value: 'title', name: 'By language'},
  {value: 'body', name: 'By description'},
]

export const Filter = ({filter, setFilter}) => {

  return (
    <>
      <MyInput
        value = {filter.search}
        onChange = {e => setFilter({...filter, search: e.target.value})}
        placeholder='Search ...'/>
      <Select
        options = {options}
        selectValue = {filter.select}
        onChangeSelect = {sort => setFilter({...filter, select: sort})}
        defaultValue = {'Sort by'}/>
    </>
  );
};
