import { useState } from "react";
import Auth_Form from "../components/Auth_Form";
import axios from "axios";

const Auth = () => {
  const [signupVisibility, setSignupVisibility] = useState(true);
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [btnText, setBtnText] = useState("Login here");

  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center mb-3">
        <div className="col-4">
          {signupVisibility && <Signup />}
          {loginVisibility && <Login />}
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-1">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              if (signupVisibility) {
                setSignupVisibility(false);
                setLoginVisibility(true);
                setBtnText("signup here");
              } else {
                setSignupVisibility(true);
                setLoginVisibility(false);
                setBtnText("login here");
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
      .post("http://localhost:3000/auth/signup", { username, password })
      .then((res) => setLabel(res.data.message));
  };
  return (
    <>
      <div className="Signup">
        <Auth_Form
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
      .post("http://localhost:3000/auth/login", { username, password })
      .then((res) => setLabel(res.data.message));
  };
  return (
    <>
      <div className="Login">
        <Auth_Form
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
