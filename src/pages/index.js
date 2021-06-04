import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header/header"
import Info from "../components/Info/Info"
import Contact from "../components/Contact/Contact"

const IndexPage = () => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout title="Angel Anna Mathew">
      <header>
        <Header />
      </header>

      <main>
        <Info />
      </main>

      <footer>
        <Contact />
      </footer>
    </Layout>
  )
}

export default IndexPage
