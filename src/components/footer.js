import * as React from "react";

import {config} from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

function Footer(props) {
  return (
    <footer key="footer">
      <a
        key="github"
        href="https://github.com/mariomantilla"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        key="linkedin"
        href="https://www.linkedin.com/in/mariomantilla/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        key="email"
        href="mailto:mariomantillasanchez@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faAt} />
      </a>
    </footer>
  );
}

export default Footer;
