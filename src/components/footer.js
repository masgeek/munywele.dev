import * as React from "react";
import * as Panelbear from "@panelbear/panelbear-js";

import {config} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import bmac from "/src/images/bmac.webp"


config.autoAddCss = false;


function Footer(props) {
  return (
    <footer key="footer">
      <a
        key="github"
        href="https://github.com/mariomantilla"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="Github"
        onClick={() => Panelbear.track("externalLink.github")}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        key="linkedin"
        href="https://www.linkedin.com/in/mariomantilla/"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="LinkedIn"
        onClick={() => Panelbear.track("externalLink.linkedIn")}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        key="twitter"
        href="https://twitter.com/mariomantilla_"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="Twitter"
        onClick={() => Panelbear.track("externalLink.twitter")}
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        key="email"
        href="mailto:mariomantillasanchez@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="Drop me an email"
        onClick={() => Panelbear.track("externalLink.email")}
      >
        <FontAwesomeIcon icon={faAt} />
      </a>

      <a 
        href="https://www.buymeacoffee.com/mariomantilla"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="Send a tip to support my work"
        onClick={() => Panelbear.track("externalLink.buyMeACoffee")}
      >
        <img src={bmac} alt="Buy Me A Coffee" style={{width: "109px", marginBottom: "-6px"}} />
      </a>
    </footer>
  );
}

export default Footer;
