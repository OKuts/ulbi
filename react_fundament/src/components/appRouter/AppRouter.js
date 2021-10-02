import React, {useContext} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "../../router/book";
import {AuthContext} from "../../context";
import {Loader} from "../ui/loader/Loader";

export const AppRouter = () => {
  const {isAuth, isLoading} = useContext(AuthContext);

  if (isLoading) return <Loader/>;

  const routes = isAuth ? [...privateRoutes] : [...publicRoutes];

  return (
    <Switch>
      {routes.map((rote) =>
         <Route key={rote.path} component={rote.component} path={rote.path}  exact={rote.exact}/>)}
      <Redirect to={isAuth ? '/posts' : '/login'}/>
    </Switch>
  );
};
