import * as React from "react";

import {config} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

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
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        key="email"
        href="mailto:mariomantillasanchez@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="Drop me an email"
      >
        <FontAwesomeIcon icon={faAt} />
      </a>

      <a 
        href="https://www.buymeacoffee.com/mariomantilla"
        target="_blank"
        rel="noreferrer"
        className="tooltipped"
        data-tooltip="Send a tip to support my work">
        <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style={{width: "109px", marginBottom: "-6px"}} />
      </a>
    </footer>
  );
}

export default Footer;
