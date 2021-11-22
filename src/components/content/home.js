import React from "react"

import logo from "/src/images/logo150.png"


function Home(props) {
    return (<div>
        <div className="columns table" style={{marginTop: "62px"}}>
            <div className="c3"><img alt="mariom.dev logo" className="centered" src={logo} /></div>
            <div className="c9">
                <p className="preTitle">Hi! My name is</p>
                <h1 className="title">Mario Mantilla</h1>
                <h2 className="subTitle">and I love using <mark>technology</mark> to create <mark>social impact</mark></h2>
            </div>
            <div className="c12 center ped" style={{fontSize: "18px"}}>
            <p>
                Check out my last project
            </p><p>
                <a href="https://honestore.app/" className="button">Honestore</a>
            </p>
            </div>
        </div>
    </div>);
}

export default Home