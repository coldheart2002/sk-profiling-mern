import Display from "../components/Display";
import { dbPort } from "../private.js";
import { useFetchData } from "../useFetchData.js";

const Profiles = () => {
  const link = `http://localhost:${dbPort}/profiles`;
  const { loading, message, data } = useFetchData(link);

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
