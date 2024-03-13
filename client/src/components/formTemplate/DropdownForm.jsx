import PropTypes from "prop-types";

const DropdownForm = ({ label, getter, setter, id, values }) => {
  return (
    <div className="form-floating">
      <select
        required
        className="form-select"
        value={getter}
        name={id}
        id={id}
        onChange={(e) => setter(e.target.value)}
      >
        <option selected disabled value="">
          ...
        </option>
        {values.map((value) => (
          <option key={value} value={value}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </option>
        ))}
      </select>
      <label htmlFor={id}>{label}</label>
      <div className="invalid-feedback">Please select a valid state</div>
    </div>
  );
};

DropdownForm.propTypes = {
  setter: PropTypes.func,
  label: PropTypes.string.isRequired,
  getter: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired),
};

DropdownForm.defaultProps = {
  label: "default",
  id: "default",
  values: ["default"],
};
export default DropdownForm;
