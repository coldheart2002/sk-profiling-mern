import { useState } from "react";
import PropTypes from "prop-types";

const Dropdown = ({ id, values }) => {
  const [select, setSelect] = useState("");
  const handleChange = (e) => {
    setSelect(e.target.value);
  };
  return (
    <>
      <label htmlFor={id} className="form-label">
        {id}
      </label>
      <select
        className="form-select"
        value={select}
        name={id}
        id={id}
        onChange={handleChange}
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

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Dropdown.defaultProps = {
  id: "default",
  values: ["default"],
};
export default Dropdown;
