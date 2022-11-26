import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>

      <div className="container page">
        <h1>Job <span>Tracking</span> App</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rerum
          reprehenderit aliquam excepturi assumenda exercitationem ipsam
          similique vitae, illo quod alias dolores doloremque illum maiores
          temporibus officiis est? Cumque, doloribus.
        </p>
        <button className="btn btn-hero">Login/Register</button>
      </div>
      <img src={main} alt="job hunt" className="img main-img" />
    </main>
  );
};

export default Landing;
