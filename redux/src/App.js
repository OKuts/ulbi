import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const cash = useSelector(state => state.cash.cash);
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
      <button onClick={()=>getCash(Number(prompt()))}>-</button>
      <button onClick={()=>addCash(Number(prompt()))}>+</button>
    </div>
  );
}

export default App;
