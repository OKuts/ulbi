import {useState} from 'react';

export const useFetching = (func) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('')

  const fetching = async () => {
    try {
      setIsLoading(true);
      await func();
    } catch (e) {
      setError(e.message)
    } finally {
      setIsLoading(false);
    }
  }

  return [fetching, isLoading, error];
};
