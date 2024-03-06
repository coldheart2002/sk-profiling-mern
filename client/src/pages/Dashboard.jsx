import WithLoading from "../components/WithLoading";
import PieCharts from "../components/charts/PieCharts";
import { chartDataLink } from "../private";
import { useFetchData } from "../useFetchData";

const Dashboard = () => {
  const { loading, message, data } = useFetchData(chartDataLink);

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {message === "Network Error!" ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        <WithLoading loading={loading}>
          <PieCharts chartData={data} />
        </WithLoading>
      )}
    </div>
  );
};

export default Dashboard;
