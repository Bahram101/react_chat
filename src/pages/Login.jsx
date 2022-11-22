import React from "react";
import Add from "../img/addAvatar.png";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Lama Chat</div>
        <div className="title">Login</div>
        <form>
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>Don't you have ac account? Register</p>
      </div>
    </div>
  );
};

export default Login;
