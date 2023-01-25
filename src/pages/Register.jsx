import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (er) => {
          setError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          });
        }
      );
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <div className="logo">Lama Chat</div>
        <div className="title">Register</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="password" />
          <input type="file" id="file" hidden />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {error && <p style={{ color: "red" }}>Something went wrong</p>}
        </form>
        <p>
          Do you have ac account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
