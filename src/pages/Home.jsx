import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default Home;
