import PropTypes from "prop-types";
import InputForm from "./formTemplate/InputForm";

const AuthForm = ({
  header,
  username,
  setUsername,
  password,
  setPassword,
  label,
  setLabel,
  handleSubmit,
}) => {
  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="msg">{label}</div>
      <h2 className="d-flex justify-content-center align-items-center pb-3">
        {header}
      </h2>
      <InputForm
        label="Username"
        type="text"
        id="username"
        setter={setUsername}
        getter={username}
      />
      <InputForm
        label="Password"
        type="password"
        id="password"
        setter={setPassword}
        getter={password}
      />
      <button className="btn btn-outline-primary">Submit</button>
    </form>

    // <form onSubmit={handleSubmit}>
    //   <div className="text-label text-capitalize">{labels.label}</div>
    //   <h2 className="text-center">{formDetails.label}</h2>
    //   <div className="mb-3">
    //     <label htmlFor="username" className="form-label">
    //       Username
    //     </label>
    //     <input
    //       onChange={(e) => {
    //         stateFunc.setUsername(e.target.value);
    //         labels.setLabel("");
    //       }}
    //       type="text"
    //       className="form-control"
    //       id="username"
    //     />
    //   </div>
    //   <div className="mb-3">
    //     <label htmlFor="password" className="form-label">
    //       Password
    //     </label>
    //     <input
    //       onChange={(e) => {
    //         stateFunc.setPassword(e.target.value);
    //         labels.setLabel("");
    //       }}
    //       autoComplete="on"
    //       type="password"
    //       className="form-control"
    //       id="password"
    //     />
    //   </div>
    //   <button type="submit" className="btn btn-outline-primary">
    //     {formDetails.label}
    //   </button>
    // </form>
  );
};

// AuthForm.propTypes = {
//   formDetails: PropTypes.object.isRequired,
//   stateFunc: PropTypes.object.isRequired,
//   handleSubmit: PropTypes.func.isRequired,
//   labels: PropTypes.object.isRequired,
// };

AuthForm.defaultProps = {
  formDetails: { label: "Default" },
};

export default AuthForm;
