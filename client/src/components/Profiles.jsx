import { useEffect, useState } from "react";
import Display from "./Display";
import axios from "axios";
import { dbPort } from "../private.js";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:${dbPort}/profiles`)
      .then((result) => setProfiles(result.data))
      .catch((err) => console.err(err));
  }, []);
  return (
    <div className="container-fluid">
      <Display profiles={profiles} />
    </div>
  );
};

export default Profiles;
