import axios from "axios";
import { useEffect, useState } from "react";

export const useMovieList = (url) => {
  const [isPending, setIsPending] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    // console.log("hello2");
    setIsPending(true);
    setMounted(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data.results;
        if (mounted) {
          setData(data);
          setIsPending(false);
        }
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };
    fetchData();

    return () => setMounted(false);
  }, [url, mounted]);
  return { isPending, data, error };
};
