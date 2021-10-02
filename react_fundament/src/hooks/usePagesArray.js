import {useMemo} from 'react';

export const usePagesArray = (totalPage) => {
  const arr = useMemo(() => {
    return new Array(totalPage).fill(0).map((_,i)=>++i)
  },[totalPage])

  return arr;
}
