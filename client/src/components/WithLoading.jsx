import { PropTypes } from "prop-types";

const WithLoading = ({ loading, message, children }) => {
  return (
    <div className="container-fluid">
      {loading ? (
        <p className="text-center text-capitalize">{message}</p>
      ) : (
        children
      )}
    </div>
  );
};

WithLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WithLoading;
