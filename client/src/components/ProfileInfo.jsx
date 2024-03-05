const ProfileInfo = ({ profile }) => {
  const fullName = `${profile.fName} ${profile.lName}`;
  return (
    <div>
      <button></button>
      <h2 style={{ textTransform: "capitalize" }}>{fullName}</h2>
    </div>
  );
};

export default ProfileInfo;

// import { useNavigate } from 'react-router-dom';

// function MyComponent() {
//   const navigate = useNavigate();

//   const goToAnotherRoute = () => {
//     navigate('/another-route');
//   };

//   return <button onClick={goToAnotherRoute}>Go to Another Route</button>;
// }
