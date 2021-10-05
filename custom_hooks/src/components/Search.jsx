import {useState} from "react";
import {useDebounce} from "../hooks/useDebounce";

export const Search = () => {
  const [value, setValue] = useState('');

  const search = (query) => {
    fetch('https://jsonplaceholder.typicode.com/todos?query=' + query)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  const debouncedSearch = useDebounce(search, 1000);


  const onchange = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  }

  return (
    <div className="App">
      <input value={value} onChange={onchange}/>
    </div>
  )
}
