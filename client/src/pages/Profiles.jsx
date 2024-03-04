import Display from "../components/Display";
import { dbPort } from "../private.js";
import { useFetchProfiles } from "../useFetchProfiles.js";

const Profiles = () => {
  const { loading, message, profiles } = useFetchProfiles(dbPort);

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
