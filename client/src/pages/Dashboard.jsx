import PieCharts from "../components/charts/PieCharts";
import { dbPort } from "../private";
import { useFetchData } from "../useFetchData";

const Dashboard = () => {
  const link = `http://localhost:${dbPort}/profiles/chartData`;
  const { loading, message, data } = useFetchData(link);

  return (
    <div className="container-fluid">
      {loading ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        <PieCharts chartData={data} />
      )}
    </div>
  );
};

export default Dashboard;
