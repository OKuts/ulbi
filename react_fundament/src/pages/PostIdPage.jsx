import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {apiPosts} from "../api/apiPosts";
import {useFetching} from "../hooks/useFetching";
import {Loader} from "../components/ui/loader/Loader";

export const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async ()=> {
    const response = await apiPosts.getById(params.id);
    setPost(response.data);
  })

  const [fetchPostComments, isCommentLoading, commentError] = useFetching(async ()=> {
    const response = await apiPosts.getComments(params.id);
    setComments(response.data);
  })

  useEffect(() => {
    fetchPostById();
    fetchPostComments();
  },[])

  return (
    <div className='App'>
      {isLoading
        ? <Loader />
        : <div>
            <h1>Post</h1>
            <b>{post.id}. {post.title}</b>
            <br/>
            {post.body}
          </div>
      }
      {error && 'Error ...'}
      {isCommentLoading
        ? <Loader />
        : <div>
          <h1>Comments</h1>
          <br/>
          {comments.map((comment, i) =>
            <div key={i}>
              <p style={{margin: '20px 0 5px 0'}}>{comment.email}</p>
              <p>{++i}. {comment.body}</p>
            </div>)}
        </div>
      }
      {commentError && 'Error ...'}
    </div>
  );
};
