import { useState, useEffect } from "react";
import Axios from "axios";
import Display from "./components/Display";
import Header from "./components/Header";
import OneData from "./components/OneData";

function App() {
  const [backBtn, setBackBtn] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [profilesVisibility, setProfilesVisibility] = useState(true);
  const [oneData, setOneData] = useState([]);
  const [oneDataVisibility, setOneDataVisibility] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3000/profiles").then((result) =>
      setProfiles(result.data)
    );
  }, []);

  const getOneData = (id) => {
    Axios.get(`http://localhost:3000/profiles/${id}`).then((result) => {
      setBackBtn(true);
      setOneData(result.data);
    });
  };
  const getAllData = () => {
    Axios.get("http://localhost:3000/profiles").then((result) => {
      setProfiles(result.data);
    });
  };

  return (
    <>
      <div className="py-3 container-fluid ">
        <div className="container">
          <div className="row">
            <Header />
          </div>
          <div className="row mt-5 pt-2">
            {backBtn && (
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  getAllData();
                  setBackBtn(false);
                  setProfilesVisibility(true);
                  setOneDataVisibility(false);
                }}
              >
                back
              </button>
            )}
            {profilesVisibility && (
              <Display
                data={profiles}
                fn={{ getOneData, setProfilesVisibility, setOneDataVisibility }}
              />
            )}
            {oneDataVisibility && <OneData data={oneData} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
