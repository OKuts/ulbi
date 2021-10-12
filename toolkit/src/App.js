import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, decrement, increment, removeTodo} from "./redux/mainReducer";

function App() {
  const count =  useSelector(state => state.main.count);
  const todos =  useSelector(state => state.main.todos);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Add</button>
      <button onClick={() => dispatch(removeTodo())}>Remove</button>
      <ul>
        {todos.map(todo => <li key={todo}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
