import { useState } from "react";
import AuthForm from "../components/AuthForm.jsx";
import axios from "axios";
import { dbPort } from "../private.js";

const Auth = () => {
  const [signupVisibility, setSignupVisibility] = useState(true);
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [btnText, setBtnText] = useState("Login Here");

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center ">
        <div className="col-4">
          {signupVisibility && <Signup />}
          {loginVisibility && <Login />}
        </div>
      </div>
      <div className="row justify-content-md-center mt-3 ">
        <div className="col-1">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              if (signupVisibility) {
                setSignupVisibility(false);
                setLoginVisibility(true);
                setBtnText("Signup Here");
              } else {
                setSignupVisibility(true);
                setLoginVisibility(false);
                setBtnText("Login Here");
              }
            }}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${dbPort}/auth/signup`, { username, password })
      .then((res) => setLabel(res.data.message))
      .catch((err) => setLabel(err.message));
  };
  return (
    <>
      <div className="Signup">
        <AuthForm
          labels={{ label, setLabel }}
          formDetails={{ label: "Signup" }}
          stateFunc={{ username, setUsername, password, setPassword }}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:${dbPort}/auth/login`, { username, password })
      .then((res) => {
        setLabel(res.data.message);
        window.localStorage.setItem("token", res.data.token);
      });
  };
  return (
    <>
      <div className="Login">
        <AuthForm
          labels={{ label, setLabel }}
          formDetails={{ label: "Login" }}
          stateFunc={{ username, setUsername, password, setPassword }}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Auth;
