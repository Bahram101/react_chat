import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="logo">Chat</div>
      <div className="user">
        <img
          src={`${
            currentUser.photoURL ||
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }`}
          alt=""
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
};

export default Navbar;
