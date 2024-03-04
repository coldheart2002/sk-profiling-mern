import { dbPort } from "./private";

let chartData = {};

const filterDataLength = (profiles, key, value) => {
  return profiles.filter((profile) => profile[key] == value).length;
};

async function fetchData() {
  try {
    let response = await fetch(`http://localhost:${dbPort}/profiles`);
    let data = await response.json();
    let profiles = data.result;

    //civi status data
    const singleCount = filterDataLength(profiles, "civilStatus", "s");
    const marriedCount = filterDataLength(profiles, "civilStatus", "m");
    const civilStatusData = [singleCount, marriedCount];

    //sex data
    const maleCount = filterDataLength(profiles, "sex", "m");
    const femaleCount = filterDataLength(profiles, "sex", "f");
    const sexData = [maleCount, femaleCount];

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
    const educationalAttainmentData = [jhsCount, shsCount, collegeCount];

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
    const votersData = [notVoters, skVoters, nationalVoters];

    chartData = {
      civilStatusData,
      sexData,
      educationalAttainmentData,
      votersData,
    };
  } catch (error) {
    console.log(error);
  }
}

fetchData();

export { chartData };
