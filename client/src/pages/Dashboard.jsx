import PieCharts from "../components/charts/PieCharts";
import { chartDataLink } from "../private";
import { useFetchData } from "../useFetchData";

const Dashboard = () => {
  const { loading, message, data } = useFetchData(chartDataLink);

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
