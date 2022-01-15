import * as React from "react"
import * as Panelbear from "@panelbear/panelbear-js";
import { Navigation, Meta, Footer, Wrapper } from "/src/components/"
import { Home, About, Experience, Projects, Contact } from "/src/components/content"
import "/src/styles/base.scss"
import { pages, PANELBEAR_SITE_ID } from "/src/config"

class IndexPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'home'
    }
  }

  componentDidMount() {
    Panelbear.load(PANELBEAR_SITE_ID);
    Panelbear.config({
      spaMode: "history",
      debug: false,
      includeURLFragment: true,
      autoTrack: true
    });
    Panelbear.trackPageview();
  }

  goToPage(page) {
    this.setState({
      currentPage: page
    });
  }

  isActive(key) {
    return key === this.state.currentPage;
  }

  render() {
    return [
      <Meta key="meta" />,
      <Navigation key="nav" pages={pages} currentPage={this.state.currentPage} onClick={(page) => this.goToPage(page)} />,
      <main key="main">
        <Wrapper active={this.isActive("home")}><Home /></Wrapper>
        <Wrapper active={this.isActive("about")}><About /></Wrapper>
        <Wrapper active={this.isActive("experience")}><Experience /></Wrapper>
        <Wrapper active={this.isActive("projects")}><Projects /></Wrapper>
        <Wrapper active={this.isActive("contact")}><Contact /></Wrapper>
      </main>,
      <Footer key="footer" />
    ]
  }
}

export default IndexPage
