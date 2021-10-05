import {useRef} from "react";
import {useHover} from "../hooks/useHover";

export const Hover = () => {
  const ref = useRef();
  const isHover = useHover(ref);

  return (
    <div ref={ref} style={{width: 300, height: 300, background: isHover ? 'red' : 'lightgray'}}>
      <button onClick={() => console.log(ref.current)}>send</button>
    </div>
  )
}
