import { useState } from "react";
import AuthForm from "../components/AuthForm.jsx";
import axios from "axios";
import { signupLink, loginLink } from "../setup.js";

const Auth = () => {
  const [signupVisibility, setSignupVisibility] = useState(true);
  const [loginVisibility, setLoginVisibility] = useState(false);
  const [btnText, setBtnText] = useState("Login Here");

  return (
    <div className="container-sm p-4 border border-primary rounded">
      <div className="row">
        <div className="col">
          {signupVisibility && <Signup />}
          {loginVisibility && <Login />}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-outline-primary mt-3"
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
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [label, setLabel] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    !e.target.checkValidity() ? e.preventDefault() : null;
    e.target.classList.add("was-validated");
    console.log(username, password);
    axios.post(signupLink, { username, password }).then((res) => {
      console.log(res);
      setLabel(res.data.message);
    });
  };
  return (
    <AuthForm
      header="Signup"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label={label}
      setLabel={setLabel}
      handleSubmit={handleSubmit}
    />
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !e.target.checkValidity() ? e.preventDefault() : null;
    e.target.classList.add("was-validated");
    axios.post(loginLink, { username, password }).then((res) => {
      console.log(res);
      setLabel(res.data.message);
      window.localStorage.setItem("id", res.data.userId);
    });
  };
  return (
    <AuthForm
      header="Login"
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label={label}
      setLabel={setLabel}
      handleSubmit={handleSubmit}
    />
  );
};

export default Auth;
