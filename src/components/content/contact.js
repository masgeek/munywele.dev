import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Contact(props) {
    return (<div>
        <h1 className="pageTitle">Contact</h1>
        <div className="center ped" style={{fontSize: "18px"}}>
            <p>I'm always open to new projects, collaborations, requests, etc.<br /> so if you have anything to share just get in touch!</p>
            <p><a href="mailto:mariomantillasanchez@gmail.com" className="button">Drop me an email</a></p>
            <p>or have a look at my social profiles below</p>
            <p>
                <a href="https://github.com/mariomantilla" className="button"><FontAwesomeIcon icon={faGithub} /> GitHub</a>
                <a href="https://www.linkedin.com/in/mariomantilla/" className="button"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
            </p>
        </div>
    </div>);
}

export default Contact