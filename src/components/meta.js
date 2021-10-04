import * as React from "react"
import { Helmet } from "react-helmet"
import logo from '../images/logo150.png'


function Meta(props) {
    return (
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
        </Helmet>
    );
}

export default Meta