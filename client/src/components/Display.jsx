import { PropTypes } from "prop-types";

const Profiles = ({ profiles }) => {
  const colStyle = "fw-medium text-capitalize";
  return (
    <div className="container-fluid ">
      <label
        htmlFor="dataLength"
        className="text-capitalize mb-3"
      >{`${profiles.length} data available`}</label>
      <table className="table table-striped text-center">
        <thead>
          <tr className="table-primary fs-5">
            <th scope="col">Action</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Birthdate</th>
            <th scope="col">Civil Status</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Sex</th>
            <th scope="col">Educational Attainment</th>
            <th scope="col">Voter</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map((profile) => {
            const middleInitial =
              profile.mName == "" ? "" : `${profile.mName.slice(0, 1)}.`;
            const fullname = `${profile.lName}, ${profile.fName} ${middleInitial}`;
            const year = profile.birthDate.slice(0, 4);
            const month = profile.birthDate.slice(5, 7);
            const day = profile.birthDate.slice(8, 10);
            const birthDate = `${year}-${month}-${day}`;

            return (
              <tr key={profile._id}>
                <th scope="row">
                  <p>
                    <span>select</span>
                  </p>
                </th>
                <td>
                  <p>
                    <span className={colStyle}>{fullname}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>{profile.age}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>{birthDate}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>{profile.civilStatus}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>{profile.contactNumber}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>{profile.sex}</span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>
                      {profile.educationalAttainment}
                    </span>
                  </p>
                </td>
                <td>
                  <p>
                    <span className={colStyle}>
                      {profile.isRegisteredVoter}
                    </span>
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Profiles.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object),
};

export default Profiles;
