import {useCallback, useRef} from "react";

export function useDebounce(cb, delay) {
  const timer = useRef();

  const debouncedCallback = useCallback((...query) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      cb(...query);
    }, delay);
  }, [cb, delay]);

  return debouncedCallback;
};
