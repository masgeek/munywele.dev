import React from "react"

import logo from "/src/images/logo150.png"
import marioPic from "/src/images/mario.jpg"


function Home(props) {
    return (<div>
        <h1 className="title">It's me, Mario!</h1>
        <div style={{textAlign: "center"}}><img alt="mariom.dev logo" src={logo} /></div>
        <h2>I love using <mark>technology</mark> to create <mark>social impact</mark></h2>
        <div className="columns">
            <div className="c4 center"><img src={marioPic} width="300" alt="Mario's pic" className="leftPic" /></div>
            <div className="c8 bigText">
            <p>A multidisciplinary engineer that loves <mark>transforming software</mark> into <mark>social impact</mark>.
            Synergistic background in aerospace engineering and years of experience developing software.
            Worked as freelance developer, in a small R&D company and currently developing a SaaS for <mark>last-mile distribution</mark> companies in developing countries.
            </p>
            <p>
            Versatile character and <mark>team worker</mark> that can work independently but enjoys teaching and
            learning from others. Savours diving into <mark>product design</mark> and <mark>business logic</mark> to come up
            with the best technical solutions.
            </p>
            </div>
        </div>
    </div>);
}

export default Home