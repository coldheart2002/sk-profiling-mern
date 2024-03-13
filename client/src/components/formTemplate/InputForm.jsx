import PropTypes from "prop-types";

const InputForm = ({ getter, setter, label, type, id }) => {
  return (
    <div className="form-floating mb-3">
      <input
        type={type}
        className="form-control"
        id={id}
        required
        value={getter}
        placeholder={label}
        onChange={(e) => setter(e.target.value)}
      />
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="invalid-feedback">Please input a {label}</div>
    </div>
  );
};

InputForm.propTypes = {
  setter: PropTypes.func,
  getter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
InputForm.defaultProps = {
  id: "",
  label: "default",
  type: "",
};

export default InputForm;
