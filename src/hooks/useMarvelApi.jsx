import { useState, useEffect } from "react";

const useMarvelApi = API => {
  const [marvelApi, setMarvelApi] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setMarvelApi({ ...data, state: true }));
  }, []);
  return marvelApi;
};
export default useMarvelApi;
