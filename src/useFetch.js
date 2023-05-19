import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data.data.results);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [url]);

  return { data, loading };
}

export default useFetch;
