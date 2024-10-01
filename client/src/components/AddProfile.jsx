import { useState } from "react";
import DropdownForm from "./formTemplate/DropdownForm";
import InputForm from "./formTemplate/InputForm";
import axios from "axios";
import { createLink } from "../setup";
import { useNavigate } from "react-router-dom";

const AddProfile = () => {
  const [firstName, setFirstName] = useState();
  const [middleName, setMiddleName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [age, setAge] = useState();
  const [birthDate, setBirthDate] = useState();
  const [contactNumber, setContactNumber] = useState();
  const [civilStatus, setCivilStatus] = useState();
  const [sex, setSex] = useState();
  const [education, setEducation] = useState();
  const [voter, setVoter] = useState();
  const navigate = useNavigate();

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
    !e.target.checkValidity() ? e.preventDefault() : null;
    e.target.classList.add("was-validated");
    axios
      .post(createLink, profile)
      .then((result) => {
        console.log(result);
        alert(result.data.message);
        navigate("/profiles");
      })
      .catch((err) => console.log(err));
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      <h3 className="text-center mb-4">Create New Profile</h3>
      <div className="row g-3">
        <div className="col-md">
          <InputForm
            label="First name"
            type="text"
            id="firstName"
            setter={setFirstName}
            getter={firstName}
          />
        </div>
        <div className="col-md">
          <InputForm
            label="Middle name"
            type="text"
            id="middleName"
            setter={setMiddleName}
            getter={middleName}
          />
        </div>
        <div className="col-md">
          <InputForm
            label="Last name"
            type="text"
            id="lastName"
            setter={setLastName}
            getter={lastName}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md-2">
          <InputForm
            label="Username"
            type="text"
            id="username"
            setter={setUsername}
            getter={username}
          />
        </div>
        <div className="col-md">
          <InputForm
            label="Age"
            type="number"
            id="age"
            setter={setAge}
            getter={age}
          />
        </div>
        <div className="col-md-3">
          <InputForm
            label="Birth date"
            type="date"
            id="birthDate"
            setter={setBirthDate}
            getter={birthDate}
          />
        </div>
        <div className="col-md">
          <DropdownForm
            label="Civil status"
            id="civilStatus"
            values={["single", "married", "divorced"]}
            setter={setCivilStatus}
            getter={civilStatus}
          />
        </div>
        <div className="col-md">
          <DropdownForm
            label="Sex"
            id="sex"
            values={["male", "female"]}
            setter={setSex}
            getter={sex}
          />
        </div>
      </div>
      <div className="row g-3">
        <div className="col-md">
          <InputForm
            label="Contact number"
            type="number"
            id="contactNumber"
            setter={setContactNumber}
            getter={contactNumber}
          />
        </div>
        <div className="col-md">
          <DropdownForm
            label="Educational attainment"
            id="education"
            values={["senior high school", "junior high school", "college"]}
            setter={setEducation}
            getter={education}
          />
        </div>
        <div className="col-md">
          <DropdownForm
            label="Voter"
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
            id="invalidCheck2"
            required
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div className="col-12">
        <button className="btn btn-outline-primary">Submit</button>
      </div>
    </form>
  );
};

export default AddProfile;
