import {useEffect, useState} from "react";

export const useRequest = request => {
  const [data, setData] = useState(null);
  const [isLoad, setIsLoad] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoad(true);
    request()
      .then(response => setData(response.data))
      .catch(error => setError(error))
      .finally(setIsLoad(false))
  }, []);

  return [data, isLoad, error];
}
