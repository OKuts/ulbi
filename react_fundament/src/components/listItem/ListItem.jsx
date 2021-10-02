import React from 'react';
import st from "./List.module.css";
import {MyButton} from "../ui/button/MyButton";
import {useHistory} from "react-router-dom";

export const ListItem = ({i, item, remove}) => {
  const router = useHistory();

  return (
    <div className={st.listItem}>
      <div>
        <strong>{`${item.id}. ${item.title}`}</strong>
        <br/>
        {`${item.body}`}
      </div>
      <MyButton onClick = {() => router.push(`/posts/${item.id}`)}>Open</MyButton>
      <MyButton onClick = {e => remove(item.id)}>Remove</MyButton>
    </div>
  );
};
