import { useEffect, useState } from "react";
import axios from "axios";
import PieChartTemplate from "../components/charts/PieChartTemplate";
import { dbPort } from "../private";
import { useFetchProfiles } from "../useFetchProfiles";

const Dashboard = () => {
  const link = `http://localhost:${dbPort}/profiles/chartData`;
  const { chartData } = useFetchProfiles(link);

  const rowStyle = "row ";
  const colStyle =
    "p-5 m-1 rounded border border-primary col d-flex justify-content-center";

  return (
    <div className="container-fluid">
      <div className={rowStyle}>
        <div className={colStyle}>
          <PieChartTemplate
            title="Civil Status"
            labels={["Single", "Married"]}
            data={chartData.civilStatusData}
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
