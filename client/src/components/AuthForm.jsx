import PropTypes from "prop-types";

const AuthForm = ({ labels, formDetails, stateFunc, handleSubmit }) => {
  return (
    <div className="container-fluid border border-primary rounded">
      <form className="p-4 g-3" onSubmit={handleSubmit}>
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
            autoComplete="on"
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

AuthForm.propTypes = {
  formDetails: PropTypes.object.isRequired,
  stateFunc: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
};

AuthForm.defaultProps = {
  formDetails: { label: "Default" },
};

export default AuthForm;
