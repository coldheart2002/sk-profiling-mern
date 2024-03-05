import PropTypes from "prop-types";

const DropdownForm = ({ getter, setter, id, values }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {id}
      </label>
      <select
        className="form-select"
        value={getter}
        name={id}
        id={id}
        onChange={(e) => setter(e.target.value)}
      >
        <option value="" disabled>
          Choose
        </option>
        {values.map((value) => (
          <option key={value} value={value.charAt(0)}>
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
};

DropdownForm.propTypes = {
  getter: PropTypes.func,
  setter: PropTypes.func,
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired),
};

DropdownForm.defaultProps = {
  id: "default",
  values: ["default"],
};
export default DropdownForm;
