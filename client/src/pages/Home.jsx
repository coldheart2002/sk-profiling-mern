import Dropdown from "../components/form/Dropdown";

const Home = () => {
  return (
    <div>
      Home
      <Dropdown id="civilStatus" values={["single", "married", "divorced"]} />
    </div>
  );
};

export default Home;
