import * as React from "react"
import { Navigation } from "../components/"
import logo from '../images/logo150.png'

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
      <Navigation key="nav" pages={pages} currentPage={this.state.currentPage} onClick={(page) => this.goToPage(page)} />,
      <main key="main">
        <div class="logo-wrapper">
          <div>Mario Mantilla</div>
          <div>Software Engineering / Social Impact</div>
          <img key="logo" alt="logo" src={logo} />
        </div>
      </main>,
      <footer>
        <a href="">
          Github
        </a>
        <a href="">
          LinkedIn
        </a>
        <a href="">
          Email
        </a>
      </footer>
    ]
  }
}

export default IndexPage
