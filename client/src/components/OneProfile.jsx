import { useParams } from "react-router-dom";
import { useFetchData } from "../useFetchData";
import { readLink } from "../private";
import ProfileInfo from "./ProfileInfo";

const OneProfile = () => {
  const { id } = useParams();
  const { loading, message, data } = useFetchData(`${readLink}/${id}`);
  console.log(`${readLink}/${id}`);
  return (
    <div className="container-fluid">
      {loading ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        <ProfileInfo profile={data} />
      )}
    </div>
  );
};

export default OneProfile;
