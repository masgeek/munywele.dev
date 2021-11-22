import React from "react";

import marioPic from "/src/images/mario512.jpg"


function About(props) {
  return (<div>
    <h1 className="pageTitle">About me</h1>
    <div className="columns">
      <div className="c4 center">
        <img src={marioPic} alt="Mario's pic" className="leftPic" />
      </div>
      <div className="c8 bigText">
        <p>
          A multidisciplinary engineer that loves{" "}
          <mark>transforming software</mark> into <mark>social impact</mark>.
          Synergistic background in aerospace engineering and years of
          experience developing software. Worked as freelance developer, in a
          small R&D company and currently developing a SaaS for{" "}
          <mark>last-mile distribution</mark> companies in developing countries.
        </p>
        <p>
          Versatile character and <mark>team worker</mark> that can work
          independently but enjoys teaching and learning from others. Savours
          diving into <mark>product design</mark> and{" "}
          <mark>business logic</mark> to come up with the best technical
          solutions.
        </p>
      </div>
    </div>
  </div>);
}

export default About;
