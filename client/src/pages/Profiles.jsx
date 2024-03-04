import Display from "../components/Display";
import { dbPort } from "../private.js";
import { useFetchProfiles } from "../useFetchProfiles.js";

const Profiles = () => {
  const link = `http://localhost:${dbPort}/profiles`;
  const { loading, message, profiles } = useFetchProfiles(link);

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

export default Profiles;
