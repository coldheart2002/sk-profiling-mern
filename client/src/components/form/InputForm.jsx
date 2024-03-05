import { useState } from "react";
import PropTypes from "prop-types";

const InputForm = ({ label, value }) => {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };
  return (
    <>
      <label htmlFor={value} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={value}
        required
        value={data}
        onChange={handleChange}
      />
    </>
  );
};

InputForm.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
InputForm.defaultProps = {
  value: "default",
  label: "default",
};

export default InputForm;
