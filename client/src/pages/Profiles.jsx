import Display from "../components/Display";
import { profilesLink } from "../private.js";
import { useFetchData } from "../useFetchData.js";

const Profiles = () => {
  const { loading, message, data } = useFetchData(profilesLink);

  return (
    <div className="container-fluid">
      {loading ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        <Display profiles={data} />
      )}
    </div>
  );
};

export default Profiles;
