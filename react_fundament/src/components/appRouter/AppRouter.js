import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {About} from '../../pages/About';
import {Posts} from '../../pages/Posts';
import {PostIdPage} from "../../pages/PostIdPage";

export const AppRouter = () => {
  return (
    <Switch>
      <Route path='/about' children={<About/>}/>
      <Route exact path='/posts' children={<Posts/>}/>
      <Route exact path='/posts/:id' children={<PostIdPage/>}/>
      <Redirect to='/posts'/>
    </Switch>
  );
};
