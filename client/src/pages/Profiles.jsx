import Display from "../components/Display";
import WithLoading from "../components/WithLoading";
import { profilesLink } from "../private.js";
import { useFetchData } from "../useFetchData.js";

const Profiles = () => {
  const { loading, message, data } = useFetchData(profilesLink);

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {message === "Network Error!" ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        <WithLoading loading={loading} data={data}>
          <Display profiles={data} />
        </WithLoading>
      )}
    </div>
  );
};

export default Profiles;
