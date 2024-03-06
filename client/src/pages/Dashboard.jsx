import WithLoading from "../components/WithLoading";
import PieCharts from "../components/charts/PieCharts";
import { chartDataLink } from "../private";
import { useFetchData } from "../useFetchData";

const Dashboard = () => {
  const { loading, message, data } = useFetchData(chartDataLink);

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <WithLoading loading={loading} message={message}>
        <PieCharts chartData={data} />
      </WithLoading>
    </div>
  );
};

export default Dashboard;
