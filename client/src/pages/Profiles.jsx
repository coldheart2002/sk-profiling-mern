import Display from "../components/Display";
import WithLoading from "../components/WithLoading";
import { profilesLink } from "../setup";
import { useFetchData } from "../useFetchData.js";

const Profiles = () => {
  const { loading, message, data } = useFetchData(profilesLink);

  return (
    <div className="container" style={{ height: "100vh" }}>
      <WithLoading loading={loading} message={message} data={data}>
        <Display profiles={data} />
      </WithLoading>
    </div>
  );
};

export default Profiles;
