import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const cash = useSelector(state => state.cash);
  const dispatch = useDispatch();

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }
  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={()=>getCash(Number(prompt(cash)))}>-</button>
      <button onClick={()=>addCash(Number(prompt(cash)))}>+</button>
    </div>
  );
}

export default App;
