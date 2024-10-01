const DataCount = ({ dataCount }) => {
  return (
    <div
      className="text-center py-2"
      style={{ fontSize: "2rem", textTransform: "capitalize" }}
    >
      {`${dataCount} data available`}
    </div>
  );
};

export default DataCount;
