import PieChartTemplate from "../components/charts/PieChartTemplate";
import { dbPort } from "../private";
import { useFetchProfiles } from "../useFetchProfiles";

const Dashboard = () => {
  const rowStyle = "row ";
  const colStyle =
    "p-5 m-1 rounded border border-primary col d-flex justify-content-center";
  const { profiles } = useFetchProfiles(dbPort);

  //civi status data
  const singleCount = filterDataLength(profiles, "civilStatus", "s");
  const marriedCount = filterDataLength(profiles, "civilStatus", "m");

  //sex data
  const maleCount = filterDataLength(profiles, "sex", "m");
  const femaleCount = filterDataLength(profiles, "sex", "f");

  //educational attainment data
  const jhsCount = filterDataLength(
    profiles,
    "educationalAttainment",
    "junior high school"
  );
  const shsCount = filterDataLength(
    profiles,
    "educationalAttainment",
    "senior high school"
  );
  const collegeCount = filterDataLength(
    profiles,
    "educationalAttainment",
    "college"
  );

  //voters data
  const notVoters = filterDataLength(
    profiles,
    "isRegisteredVoter",
    "not registered"
  );
  const skVoters = filterDataLength(
    profiles,
    "isRegisteredVoter",
    "sk election"
  );
  const nationalVoters = filterDataLength(
    profiles,
    "isRegisteredVoter",
    "national election"
  );

  return (
    <div className="container-fluid">
      <div className={rowStyle}>
        <div className={colStyle}>
          <PieChartTemplate
            title="Civil Status"
            labels={["Single", "Married"]}
            data={[singleCount, marriedCount]}
            backgroundColor={["blue", "pink"]}
          />
        </div>
        <div className={colStyle}>
          <PieChartTemplate
            title="Sex"
            labels={["Male", "Female"]}
            data={[maleCount, femaleCount]}
            backgroundColor={["blue", "pink"]}
          />
        </div>
      </div>
      <div className={rowStyle}>
        <div className={colStyle}>
          <PieChartTemplate
            title="Educational Attainment"
            labels={["Junior High School", "Senior High School", "College"]}
            data={[jhsCount, shsCount, collegeCount]}
            backgroundColor={["blue", "pink", "red"]}
          />
        </div>
        <div className={colStyle}>
          <PieChartTemplate
            title="Voters"
            labels={["Not Voters", "SK Elections", "National Elections"]}
            data={[notVoters, skVoters, nationalVoters]}
            backgroundColor={["blue", "pink", "red"]}
          />
        </div>
      </div>
    </div>
  );
};

const filterDataLength = (profiles, key, value) => {
  return profiles.filter((profile) => profile[key] == value).length;
};

export default Dashboard;
