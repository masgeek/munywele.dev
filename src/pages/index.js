import * as React from "react"
import { Helmet } from "react-helmet"
import { Navigation } from "../components/"
import logo from '../images/logo150.png'
import "../styles/base.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

const pages = [
  {
    key: 'home',
    name: 'M'
  },
  {
    key: 'about',
    name: 'About me'
  },
  {
    key: 'experience',
    name: 'Experience'
  },
  {
    key: 'projects',
    name: 'Projects'
  },
  {
    key: 'contact',
    name: 'Contact'
  }
]

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'home'
    }
  }

  goToPage(page) {
    this.setState({
      currentPage: page
    });
  }

  render() {
    return [
      <Helmet>
        <title>Mario Mantilla</title>
        <meta name="description" content="The personal website of Mario Mantilla, software engineering and social impact" />
        <link rel="canonical" href="https://mariom.dev/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mario Mantilla - Software Engineer and Social Impact" />
        <meta property="og:description" content="The personal website of Mario Mantilla, software engineering and social impact" />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://mariom.dev/" />
      </Helmet>,
      <Navigation key="nav" pages={pages} currentPage={this.state.currentPage} onClick={(page) => this.goToPage(page)} />,
      <main key="main">
        <div className="logo-wrapper">
          <div>Mario Mantilla</div>
          <div>Software Engineering / Social Impact</div>
          <img key="logo" alt="logo" src={logo} />
        </div>
      </main>,
      <footer key="footer">
        <a href="https://github.com/mariomantilla" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/mariomantilla/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:mariomantillasanchez@gmail.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faAt} />
        </a>
      </footer>
    ]
  }
}

export default IndexPage
