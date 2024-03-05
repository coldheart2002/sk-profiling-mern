import PropTypes from "prop-types";

const InputForm = ({ getter, setter, label, type, value }) => {
  return (
    <>
      <label htmlFor={value} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={value}
        required
        value={getter}
        onChange={(e) => setter(e.target.value)}
      />
    </>
  );
};

InputForm.propTypes = {
  getter: PropTypes.func,
  setter: PropTypes.func,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
InputForm.defaultProps = {
  value: "default",
  label: "default",
  type: "",
};

export default InputForm;
