/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import Header from "../components/header/header"
import Info from "../components/Info/Info"
import Contact from "../components/Contact/Contact"
// import "./layout.css"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  console.log(children)
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <main title="Angel's Portfolio">
        <Header />
        {/* <div> */}

        <Info />

        <footer>
          <Contact />
        </footer>
      </main>
      {/* </div> */}
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
