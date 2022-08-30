import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url) => {
  let server_URL = process.env.REACT_APP_SERVER_URL + url;
  console.log(server_URL);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const responce = await axios.get(server_URL);
        setData(responce.data);
      } catch (err) {
        setError(err);
      }

      setLoading(false);
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);

    try {
      const responce = axios.get(url);
      setData(responce.data);
    } catch (err) {
      setError(err);
    }

    setLoading(false);
  };

  return { data, loading, error, reFetch };
};

export default useFetch;
