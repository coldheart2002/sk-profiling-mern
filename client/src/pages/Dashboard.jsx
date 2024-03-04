import { useEffect, useState } from "react";
import axios from "axios";
import PieChartTemplate from "../components/charts/PieChartTemplate";
import { dbPort } from "../private";

const Dashboard = () => {
  const rowStyle = "row ";
  const colStyle =
    "p-5 m-1 rounded border border-primary col d-flex justify-content-center";
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:${dbPort}/profiles/chartData`)
      .then((result) => {
        setChartData(result.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="container-fluid">
      <div className={rowStyle}>
        <div className={colStyle}>
          <PieChartTemplate
            title="Civil Status"
            labels={["Single", "Married"]}
            data={chartData.civilStatus}
            backgroundColor={["blue", "pink"]}
          />
        </div>
        <div className={colStyle}>
          <PieChartTemplate
            title="Sex"
            labels={["Male", "Female"]}
            data={chartData.sexData}
            backgroundColor={["blue", "pink"]}
          />
        </div>
      </div>
      <div className={rowStyle}>
        <div className={colStyle}>
          <PieChartTemplate
            title="Educational Attainment"
            labels={["Junior High School", "Senior High School", "College"]}
            data={chartData.educationData}
            backgroundColor={["blue", "pink", "red"]}
          />
        </div>
        <div className={colStyle}>
          <PieChartTemplate
            title="Voters"
            labels={["Not Voters", "SK Elections", "National Elections"]}
            data={chartData.votersData}
            backgroundColor={["blue", "pink", "red"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
