import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchProfiles = (dbPort) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios
      .get(`http://localhost:${dbPort}/profiles`)
      .then((result) => {
        result.data.result == 0 ? setLoading(true) : setLoading(false);
        setMessage(result.data.message);
        setProfiles(result.data.result);
      })
      .catch((err) => {
        setLoading(true);
        setMessage(`${err.message}!`);
      });
  }, [dbPort]);
  return { loading, message, profiles };
};
