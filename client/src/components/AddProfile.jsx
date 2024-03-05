import { useState } from "react";
import DropdownForm from "./formTemplate/DropdownForm";
import InputForm from "./formTemplate/InputForm";
import PropTypes from "prop-types";
import axios from "axios";
import { createLink } from "../private";

const AddProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [birthDate, setBirthDate] = useState("");
  const [contactNumber, setContactNumber] = useState(0);
  const [civilStatus, setCivilStatus] = useState(0);
  const [sex, setSex] = useState(0);
  const [education, setEducation] = useState(0);
  const [voter, setVoter] = useState(0);

  const profile = {
    fName: firstName,
    mName: middleName,
    lName: lastName,
    age,
    birthDate,
    civilStatus,
    contactNumber,
    sex,
    educationalAttainment: education,
    isRegisteredVoter: voter,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(createLink, profile)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="container-md border border-primary rounded ">
      <form className="row g-3 p-4" onSubmit={handleSubmit}>
        <div className="row g-2">
          <div className="col-md">
            <InputForm
              label="First name"
              type="text"
              value="firstName"
              setter={setFirstName}
              getter={firstName}
            />
          </div>
          <div className="col-md">
            <InputForm
              label="Middle name"
              type="text"
              value="middleName"
              setter={setMiddleName}
              getter={middleName}
            />
          </div>
          <div className="col-md">
            <InputForm
              label="Last name"
              type="text"
              value="lastName"
              setter={setLastName}
              getter={lastName}
            />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-2">
            <InputForm
              label="Username"
              type="text"
              value="username"
              setter={setUsername}
              getter={username}
            />
          </div>
          <div className="col-md">
            <InputForm
              label="Age"
              type="number"
              value="age"
              setter={setAge}
              getter={age}
            />
          </div>
          <div className="col-md-3">
            <InputForm
              label="Birth date"
              type="date"
              value="birthDate"
              setter={setBirthDate}
              getter={birthDate}
            />
          </div>
          <div className="col-md">
            <DropdownForm
              id="civilStatus"
              values={["single", "married", "divorced"]}
              setter={setCivilStatus}
              getter={civilStatus}
            />
          </div>
          <div className="col-md">
            <DropdownForm
              id="sex"
              values={["male", "female"]}
              setter={setSex}
              getter={sex}
            />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md">
            <InputForm
              label="Contact number"
              type="number"
              value="contactNumber"
              setter={setContactNumber}
              getter={contactNumber}
            />
          </div>
          <div className="col-md">
            <DropdownForm
              id="education"
              values={["senior high school", "junior high school", "college"]}
              setter={setEducation}
              getter={education}
            />
          </div>
          <div className="col-md">
            <DropdownForm
              id="voter"
              values={["sk election", "national election", "no"]}
              setter={setVoter}
              getter={voter}
            />
          </div>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-outline-primary">Submit form</button>
        </div>
      </form>
    </div>
  );
};

AddProfile.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddProfile;
