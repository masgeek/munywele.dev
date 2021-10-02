import * as React from "react"
import { Link } from "gatsby"
import "../styles/base.scss"


// markup
const NotFoundPage = () => {
  return (
    <main className="container" style={{textAlign: "center", marginTop: "10em"}}>
      <title>Not found</title>
      <h1 className="title">Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
