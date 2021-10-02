import React from 'react';
import {ListItem} from "./listItem/ListItem";
import {Loader} from "./ui/loader/Loader";

export const List = ({list, title, remove, isPostsLoading}) => {
  if (!list.length) return <h2>No posts</h2>

  return (
    <>
      {isPostsLoading && <div style={{display: 'flex', justifyContent: 'center'}}><Loader /></div>}
      <div>
        <h1>{title}</h1>
          {list.map((item, i) => (
            <ListItem
            key = {item.id}
            remove = { remove }
            i={i}
            item={item}/>))}
      </div>
    </>
  );
};
