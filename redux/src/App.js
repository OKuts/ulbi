import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {actionAddCustomer, actionRemoveCustomer} from "./store/customerReduser";
import {actionAddCash, actionGetCash} from "./store/cashReduser";
import {fetchCustomer, fetchCustomers} from "./asyncAction/customers";

function App() {
  const cash = useSelector(state => state.cash.balance);
  const users = useSelector(state => state.customer.users);

  const dispatch = useDispatch();

  const getCash = (cash) => {
    dispatch(actionGetCash(cash))
  }
  const addCash = (cash) => {
    dispatch(actionAddCash(cash))
  }

  const addUser = (name) => {
    const user = {
      name,
      id: Date.now(),
    }
    dispatch(actionAddCustomer(user));
  }

  const removeUser = (user) => {
    dispatch(actionRemoveCustomer(user.id));
  }

  const addUsers = () => {

  }

  return (
    <div className="App">
      <div>{cash}</div>
      <div>
        <button onClick={()=>getCash(Number(prompt()))}>Open</button>
        <button onClick={()=>addCash(Number(prompt()))}>Put</button>
        <button onClick={()=>addUser(prompt())}>Add user</button>
        <button onClick={()=>dispatch(fetchCustomers())}>Add users from Db</button>
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
