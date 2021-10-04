import * as React from "react"
import { Navigation, Meta, Footer, Wrapper } from "/src/components/"
import { Home, Contact } from "/src/components/content"
import "/src/styles/base.scss"
import { pages } from "/src/config"

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

  isActive(key) {
    return key === this.state.currentPage;
  }

  render() {
    return [
      <Meta key="meta" />,
      <Navigation key="nav" pages={pages} currentPage={this.state.currentPage} onClick={(page) => this.goToPage(page)} />,
      <main key="main">
        <Wrapper active={this.isActive("home")}><Home /></Wrapper>
        <Wrapper active={this.isActive("contact")}><Contact /></Wrapper>
      </main>,
      <Footer />
    ]
  }
}

export default IndexPage
