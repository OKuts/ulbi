import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const cash = useSelector(state => state.cash.balance);
  const users = useSelector(state => state.customer.users);

  const dispatch = useDispatch();

  const getCash = (cash) => {
    dispatch({type:'GET_CASH', payload: cash})
  }
  const addCash = (cash) => {
    dispatch({type:'ADD_CASH', payload: cash})
  }

  const addUser = (name) => {
    const user = {
      name,
      id: Date.now(),
    }
    dispatch({type:'ADD_CUSTOMER', payload: user})
  }

  const removeUser = (user) => {
    dispatch({type:'REMOVE_CUSTOMER', payload: user.id})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={()=>getCash(Number(prompt()))}>Open</button>
        <button onClick={()=>addCash(Number(prompt()))}>Put</button>
        <button onClick={()=>addUser(prompt())}>Add user</button>
      </div>
      <div>
        {users.length
          ? users.map((user, i) =>
            <p onClick={() => removeUser(user)} key={user.id}>{user.name}</p>)
          : <p>Empty</p>}
      </div>
    </div>
  );
}

export default App;
