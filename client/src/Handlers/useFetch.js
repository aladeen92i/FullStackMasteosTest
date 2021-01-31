import { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController()
    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(url, options, { signal: abortCont.signal })
        const json = await res.json()
        setData(json)
        setIsPending(false)

      } catch (error) {
        setError(error);
      }
    }
    fetchData()
    // abort the fetch
    return () => abortCont.abort();
  }, [])

  return { data, isPending, error };
}
 
export default useFetch;