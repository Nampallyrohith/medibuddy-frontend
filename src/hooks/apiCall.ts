import { useState, useEffect } from "react";
import { fetchData } from "@/services/apiService";

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const { data, error } = await fetchData<T>(endpoint);
      setData(data);
      setError(error || null);
      setLoading(false);
    };

    fetch();
  }, [endpoint]);

  return { data, error, loading };
};
