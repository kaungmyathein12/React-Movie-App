import axios from "axios";
import { useEffect, useState } from "react";

export const useDetail = (url) => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(true);
  const [trailerCode, setTrailerCode] = useState(null);
  useEffect(() => {
    setMounted(true);
    // console.log("hello3");
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = await response.data;
        if (mounted) {
          setData(data);
          console.log(data);
          setTrailerCode(data.id);
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
  return { isPending, data, error, trailerCode };
};
