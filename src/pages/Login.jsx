import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Lama Chat</div>
        <div className="title">Login</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {error && <span style={{color:'red', fontSize:'13px'}}>There is something wen wrong</span>}
        </form>
        <p>
          Don't you have ac account? <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
