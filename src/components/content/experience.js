import React from "react";

import logoSolaris from "/src/images/logosolaris.png"


function Experience(props) {
  return (<div>
    <h1 className="pageTitle">Experience</h1>
    <div className="columns">
      <div className="c4 center">
      <img src={logoSolaris} alt="Solaris Offgrid's logo" className="pImage" />
      </div>
      <div className="c8">
        <h1>Solaris Offgrid</h1>
        <p>
        Design and implementation of new features for a last-mile fintech (for Pay-as-you-go enabled products).
        Using Python (with flask and Django), PostgreSQL to power the backend and technologies like TDD, CI/CD
        and containerisation to develop and deploy the application following scrum and latest best practices.
        Daily work with critical systems for payments processing and token generation. Hands on experience
        handling critical incidents in infrastructure.
        </p>
      </div>
    </div>
    <div className="columns">
      <div className="c8">
        <h1>Bound4Blue</h1>
        <p>
        Completed 3 months internship sponsored by Santander Bank. After that, leader of technical software development
        of analysis software in Python, providing accurate reliable long-term predictions of the system performance.
        Remote sensing data processing and analysis, including geolocated data visualisation. Capable of produce reliable
        long-term predictions of fuel savings and financial indicators of the potential purchase of a system. Devised
        an innovative assessment methodology that was presented in an academic article.
        </p>
      </div>
      <div className="c4 center">
        <img src={logoSolaris} alt="Solaris Offgrid's logo" className="pImage" />
      </div>
    </div>
    <div className="columns">
      <div className="c4 center">
      <img src={logoSolaris} alt="Solaris Offgrid's logo" className="pImage" />
      </div>
      <div className="c8">
        <h1>Freelance Web Developer</h1>
        <p>
        Developed own Content Management System based on PHP/MySQL/HTML/JavaScript for businesses.
        Experiences in using frameworks such as Symphony and jQuery and integrating APIs from external
        services like Facebook, Google OAuth, Text2Speech, etc.
        </p>
      </div>
    </div>
  </div>);
}

export default Experience;
