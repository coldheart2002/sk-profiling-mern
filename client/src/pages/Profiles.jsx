import Display from "../components/Display";
import WithLoading from "../components/WithLoading";
import { profilesLink } from "../private.js";
import { useFetchData } from "../useFetchData.js";

const Profiles = () => {
  const { loading, message, data } = useFetchData(profilesLink);

  return (
    <div className="container-fluid">
      <WithLoading loading={loading} message={message} data={data}>
        <Display profiles={data} />
      </WithLoading>
    </div>
  );
};

export default Profiles;
