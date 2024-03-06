import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = (link) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get(link)
      .then((response) => {
        response.data.result == 0 ? setLoading(true) : setLoading(false);
        setMessage(response.data.result);
        setData(response.data.result);
      })
      .catch((err) => {
        setLoading(true);
        setMessage(`${err.message}!`);
      });
  }, [link]);
  return { loading, message, data };
};
