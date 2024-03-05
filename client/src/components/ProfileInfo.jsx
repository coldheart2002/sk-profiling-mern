import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const ProfileInfo = ({ profile }) => {
  const navigate = useNavigate();
  const fullName = `${profile.fName} ${profile.lName}`;
  return (
    <div>
      <button
        className="btn btn-outline-primary"
        onClick={() => navigate("/profiles")}
      >
        Back
      </button>
      <h2 style={{ textTransform: "capitalize" }}>{fullName}</h2>
    </div>
  );
};

ProfileInfo.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileInfo;
