import Dropdown from "./form/Dropdown";
import InputForm from "./form/InputForm";

const AddProfile = () => {
  return (
    <div className="container-md border border-primary rounded ">
      <form className="row  g-3 p-4">
        <div className="row g-2">
          <div className="col-md">
            <InputForm label="Firts name" value="firstName" />
          </div>
          <div className="col-md">
            <InputForm label="Middle name" value="middleName" />
          </div>
          <div className="col-md">
            <InputForm label="Last name" value="lastName" />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md-2">
            <InputForm label="Username" value="username" />
          </div>
          <div className="col-md">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input type="number" className="form-control" id="age" required />
          </div>
          <div className="col-md-3">
            <label htmlFor="birthDate" className="form-label">
              Birth date
            </label>
            <input
              type="date"
              className="form-control"
              id="birthDate"
              required
            />
          </div>
          <div className="col-md">
            <Dropdown
              id="civilStatus"
              values={["single", "married", "divorced"]}
            />
          </div>
          <div className="col-md">
            <Dropdown id="sex" values={["male", "female"]} />
          </div>
        </div>
        <div className="row g-2">
          <div className="col-md">
            <label htmlFor="contactNumber" className="form-label">
              Contact number
            </label>
            <input
              type="number"
              className="form-control"
              id="contactNumber"
              required
            />
          </div>
          <div className="col-md">
            <label htmlFor="education" className="form-label">
              Educational attainment
            </label>
            <select
              defaultValue=""
              className="form-select"
              id="education"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="senior high school">Senior high school</option>
              <option value="junior high school">Junior high school</option>
              <option value="college">College</option>
            </select>
          </div>
          <div className="col-md">
            <label htmlFor="education" className="form-label">
              Are you a voter?
            </label>
            <select
              defaultValue=""
              className="form-select"
              id="education"
              required
            >
              <option selected disabled value="">
                Choose...
              </option>
              <option value="SK Election">SK election</option>
              <option value="National Election">National election</option>
              <option value="No">No</option>
            </select>
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
          <button className="btn btn-outline-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProfile;
