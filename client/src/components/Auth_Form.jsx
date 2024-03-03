import PropTypes from "prop-types";

const Auth_Form = ({ labels, formDetails, stateFunc, handleSubmit }) => {
  return (
    <div className="Login">
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="text-label text-capitalize">{labels.label}</div>
        <h2 className="text-center">{formDetails.label}</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            onChange={(e) => {
              stateFunc.setUsername(e.target.value);
              labels.setLabel("");
            }}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              stateFunc.setPassword(e.target.value);
              labels.setLabel("");
            }}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-outline-primary">
          {formDetails.label}
        </button>
      </form>
    </div>
  );
};

Auth_Form.propTypes = {
  formDetails: PropTypes.object.isRequired,
  stateFunc: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
};

Auth_Form.defaultProps = {
  formDetails: { label: "Default" },
};

export default Auth_Form;
