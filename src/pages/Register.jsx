import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref,  getDownloadURL, uploadBytesResumable} from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { auth, storage, db } from "../firebase";

const Register = () => {
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password); 
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on(
        (error) => {
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
          {error && <p>Something went wrong</p>}
        </form>
        <p>Do you have ac account? Login</p>
      </div>
    </div>
  );
};

export default Register;
