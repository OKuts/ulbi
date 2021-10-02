import React, {useState} from 'react';
import {MyInput} from "./ui/input/MyInput";
import {MyButton} from "./ui/button/MyButton";

export function PostForm({create, setVisible}) {
  const [post, setPost] = useState({title: '', body:''});

  const addNewPost = () => {
    if (post.title) create({...post, id: Date.now()});
    setPost({title: '', body:''});
    setVisible(false);
  }

  return (
    <form>
      <MyInput
        onChange = {e => setPost({...post, title: e.target.value})}
        placeholder='title'
        value={post.title}/>
      <MyInput
        value={post.body}
        onChange = {e => setPost({...post, body: e.target.value})}
        placeholder='description'/>
      <MyButton onClick={addNewPost}>Send</MyButton>
    </form>
  );
}
