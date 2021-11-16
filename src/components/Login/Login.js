import React, { useState, useContext } from "react";
import "./Login.css";
import Swal from "sweetalert2";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();

  const [progress, setProgress] = useState(false);
  const [disability, setDisability] = useState(false);

  const handleLogin = () => {
    history.push("/custodialWallet");
  };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div id="login-background">
      <div id="login-page-content">
        <div id="login-box">
          <span id="login-welcome-text">Welcome to WeApp</span>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <span className="login-input-helper">Admin ID</span>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <span className="login-input-helper">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {/* <span
            id="login-forgot-password"
            onClick={() => {
              alert('action for forgot password');
            }}
          >
            Forgot Password?
          </span> */}
            <Button
              id="login-submit-button"
              onClick={handleLogin}
              disabled={disability}
              type="submit"
            >
              Login
            </Button>
          </form>
          {progress === true && <CircularProgress />}
        </div>
      </div>
    </div>
  );
};
export default Login;
