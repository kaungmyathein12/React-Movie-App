import axios from "axios";
import { useEffect, useState } from "react";
import { url, apiKey } from "../apiConfig";
export const useGetTrailer = (id) => {
  const [error, setError] = useState(null);
  const [code, setCode] = useState(null);
  const [mounted, setMounted] = useState(false);
  const videoUrl = `${url}${id}/videos?api_key=${apiKey}`;
  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      if (id !== null) {
        try {
          const response = await axios.get(videoUrl);
          const data = response.data;
          if (mounted) {
            setCode(data.results[0].key);
          }
        } catch (error) {
          setError(error.message);
        }
      }
    };
    fetchData();
    return () => setMounted(false);
  }, [videoUrl, mounted, id]);
  return { code, error };
};
