import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/ui/navigation/Navigation';
import { AppRouter } from './components/appRouter/AppRouter';
import {AuthContext} from "./context";
import {useEffect, useState} from "react";

export const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
      <BrowserRouter>
        <Navigation/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}
