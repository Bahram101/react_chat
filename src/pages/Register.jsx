import React from "react";
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Lama Chat</div>
        <div className="title">Register</div>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="password" />
          <input type="file" id="file" hidden/>
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>Do you have ac account? Login</p>
      </div>
    </div>
  );
};

export default Register;
