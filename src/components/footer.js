import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useLocation } from "@reach/router"; // this helps tracking the location
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";

class CookiesBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !Cookies.get("gatsby-gdpr-google-analytics"),
    };
  }

  initAnalytics(location) {
    Cookies.set("gatsby-gdpr-google-analytics", "true");
    this.setState({
      visible: false,
    });
    initializeAndTrack(location);
  }

  render() {
    return this.state.visible ? (
      <button
        onClick={() => this.initAnalytics(this.props.location)}
        className="cookiesButton"
      >
        Click here to let me use cookies 🙏
      </button>
    ) : null;
  }
}

function Footer(props) {
  const location = useLocation();
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
      <CookiesBanner key="banner" location={location} />
    </footer>
  );
}

export default Footer;
