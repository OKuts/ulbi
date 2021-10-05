import {useInput} from "../hooks/useInput";

export const Input = () => {
  const username = useInput('');
  const password = useInput('');

  return (
    <div className="App">
      <input {...username} type='text' placeholder='name'/>
      <input {...password} type='text' placeholder='password'/>
      <button onClick={() => console.log(username.value, password.value)}>send</button>
    </div>
  )
}
