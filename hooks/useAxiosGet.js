import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = (uri) => {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(uri);
        setData(response.data);
        setLoading(false);
      } catch (e) {
        setError(true);
        setLoading(false);            
      }
    }
    fetchData();
  }, [ uri ]);

  return { loading, error, data };
}

export default useAxiosGet;
