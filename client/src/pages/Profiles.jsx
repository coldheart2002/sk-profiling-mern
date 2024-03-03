import { useEffect, useState } from "react";
import Display from "../components/Display";
import axios from "axios";
import { dbPort } from "../private.js";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:${dbPort}/profiles`)
      .then((result) => {
        setLoading(false);
        setProfiles(result.data);
      })
      .catch((err) => console.err(err));
  }, []);
  return (
    <div className="container-fluid">
      {loading ? <p>Loading...</p> : <Display profiles={profiles} />}
    </div>
  );
};

export default Profiles;