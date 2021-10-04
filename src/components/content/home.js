import React from "react"
import logo from '/src/images/logo150.png'


function Home(props) {
    return (<div className="logo-wrapper">
        <div>Mario Mantilla</div>
        <div>Software Engineering / Social Impact</div>
        <img key="logo" alt="logo" src={logo} />
    </div>);
}

export default Home