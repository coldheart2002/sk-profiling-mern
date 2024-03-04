import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchProfiles = (link) => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Loading...");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(link)
      .then((result) => {
        result.data.result == 0 ? setLoading(true) : setLoading(false);
        setMessage(result.data.message);
        setProfiles(result.data.result);
        setChartData(result.data);
      })
      .catch((err) => {
        setLoading(true);
        setMessage(`${err.message}!`);
      });
  }, [link]);
  return { loading, message, profiles, chartData };
};
