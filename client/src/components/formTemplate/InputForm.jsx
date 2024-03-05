import PropTypes from "prop-types";

const InputForm = ({ getter, setter, label, type, id }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        required
        value={getter}
        onChange={(e) => setter(e.target.value)}
      />
    </>
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
