import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navigation } from './components/ui/navigation/Navigation';
import { AppRouter } from './components/appRouter/AppRouter';

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation/>
      <AppRouter/>
    </BrowserRouter>
  )
}
