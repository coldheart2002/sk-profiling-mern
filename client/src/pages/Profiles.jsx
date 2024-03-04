import { useEffect, useState } from "react";
import Display from "../components/Display";
import axios from "axios";
import { dbPort } from "../private.js";

const Profiles = () => {
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
  }, []);

  return (
    <div className="container-fluid">
      {loading ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        <Display profiles={profiles} />
      )}
    </div>
  );
};

export default { Profiles, profiles };
