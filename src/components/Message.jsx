import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Message = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src={`${
            currentUser.photoURL ||
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          }`}
          alt=""
        />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
      </div>
    </div>
  );
};

export default Message;
