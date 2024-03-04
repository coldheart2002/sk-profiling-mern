import PieChart from "../components/PieChart";

const Dashboard = () => {
  const size = 500;
  const title = "Test";
  const labels = ["Red", "Blue"];
  const data = [300, 50];
  const backgroundColor = ["rgb(255, 99, 132)", "rgb(54, 162, 235)"];
  return (
    <div>
      <PieChart
        size={size}
        title={title}
        labels={labels}
        data={data}
        backgroundColor={backgroundColor}
      />
    </div>
  );
};

export default Dashboard;
