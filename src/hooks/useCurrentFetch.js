import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrentFetch = (url) => {
  const [isPending, setIsPending] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(true);
  const [videoData, setVideoData] = useState(null);
  useEffect(() => {
    // console.log("hello1");
    setIsPending(true);
    setMounted(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const randomNumber = Math.floor(Math.random() * 10);
        const data = await response.data.results[randomNumber];
        if (mounted) {
          setData(data);
          setVideoData(data.id);
          if (videoData !== null) {
            setIsPending(false);
          }
        }
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    };
    fetchData();
    return () => setMounted(false);
  }, [url, mounted, videoData]);
  return { isPending, data, error, videoData };
};
