import './App.css';
import {useInput} from "./hooks/useInput";

function App() {
  const username = useInput('');
  const password = useInput('');

  return (
    <div className="App">
      <input {...username} type='text' placeholder='name'/>
      <input {...password} type='text' placeholder='password'/>
      <button onClick={() => console.log(username.value, password.value)}>send</button>
    </div>
  );
}

export default App;
