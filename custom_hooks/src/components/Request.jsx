import {useRequest} from "../hooks/useRequest";
import axios from "axios";

export const Request = () => {
  const [todos, isLoad, error] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
  }

  console.log(isLoad, error)
  if (isLoad) return <h1>load...</h1>;
  if (error) return <h1>{error}</h1>
  if (!todos) return null;

  return (
    <div>
      {todos.map(todo =>
        <div key={todo.id}>{todo.title}</div>
      )}
    </div>
  )
}
