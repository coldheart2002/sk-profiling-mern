import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { profilesLink } from "../setup";
import axios from "axios";

const ProfileInfo = ({ profile }) => {
  const navigate = useNavigate();
  const fullName = `${profile.fName} ${profile.lName}`;
  return (
    <>
      <button
        className="btn btn-outline-primary"
        onClick={() => navigate("/profiles")}
      >
        Back
      </button>
      <h2 style={{ textTransform: "capitalize" }}>{fullName}</h2>
      <button
        className="btn btn-outline-primary"
        onClick={() => {
          let endpoint = `${profilesLink}/${profile._id}`;

          axios.delete(endpoint).then((res) => {
            alert(res.data.message);
            navigate("/profiles");
          });
        }}
      >
        Delete
      </button>
    </>
  );
};

ProfileInfo.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileInfo;
