/* eslint-disable react/prop-types */
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const PieChart = ({ title, size, labels, data, backgroundColor }) => {
  return (
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              data: data,
              backgroundColor: backgroundColor,
              hoverOffset: 4,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: title,
              font: {
                size: "30",
              },
            },
            legend: {
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
