import React from "react";
import Header from "../components/common/Header";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <Header />
        <h2 className="homepage-title">
          Welcome to the <span>HMS Management System</span>
        </h2>
      </div>
    </>
  );
};

export default HomePage;
