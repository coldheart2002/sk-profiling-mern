import { PropTypes } from "prop-types";

const WithLoading = ({ loading, message, children }) => {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      {loading ? (
        <>
          <LoadingAnimation />
        </>
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

const LoadingAnimation = () => {
  return (
    <div className="wrapper">
      <div className="box-wrap">
        <div className="box one"></div>
        <div className="box two"></div>
        <div className="box three"></div>
        <div className="box four"></div>
        <div className="box five"></div>
        <div className="box six"></div>
      </div>
    </div>
  );
};

export default WithLoading;
