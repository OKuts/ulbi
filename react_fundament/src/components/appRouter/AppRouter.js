import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../../router/book";

export const AppRouter = () => {
  const isLogin = false;
  const routes = isLogin ? [...privateRoutes] : [...publicRoutes];

  return (
    <Switch>
      {routes.map((rote) =>
         <Route key={rote.path} component={rote.component} path={rote.path}  exact={rote.exact}/>)}
      <Redirect to={isLogin ? '/posts' : '/login'}/>
    </Switch>
  );
};
