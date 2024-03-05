import { useNavigate } from "react-router-dom";
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

export default ProfileInfo;
