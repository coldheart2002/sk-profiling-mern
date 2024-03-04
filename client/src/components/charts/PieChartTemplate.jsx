/* eslint-disable no-unused-vars */
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import PropTypes from "prop-types";

const PieChartTemplate = ({ title, size, labels, data, backgroundColor }) => {
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

PieChartTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  labels: PropTypes.arrayOf(PropTypes.string.isRequired),
  data: PropTypes.arrayOf(PropTypes.number.isRequired),
  backgroundColor: PropTypes.arrayOf(PropTypes.string.isRequired),
};

PieChartTemplate.defaultProps = {
  title: "Default",
  size: 500,
  labels: ["Default"],
  data: [1],
  backgroundColor: ["rgba(0,0,0,0.1)"],
};

export default PieChartTemplate;
