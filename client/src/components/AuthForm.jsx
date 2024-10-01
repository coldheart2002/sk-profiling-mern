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
  );
};

AuthForm.propTypes = {
  header: PropTypes.string,
  username: PropTypes.string,
  setUsername: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  label: PropTypes.string,
  setLabel: PropTypes.func,
  handleSubmit: PropTypes.func,
};

AuthForm.defaultProps = {
  formDetails: { label: "Default" },
};

export default AuthForm;
