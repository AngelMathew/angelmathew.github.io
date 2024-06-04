import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header/header"
import Info from "../components/Info/Info"
import Contact from "../components/Contact/Contact"
import { graphql } from "gatsby"

export default function  IndexPage({data}){
  const projects=data.allMarkdownRemark.nodes
  return (
    <Layout title="Angel Anna Mathew">
      <>
          <Header />
        <main>
          <Info projects={projects}/>
        </main>

        <footer>
          <Contact />
        </footer>
      </>
    </Layout>
  )
}

export const query=graphql`
query ProjectsPage {
  allMarkdownRemark {
    nodes {
      frontmatter {
        stack
        title
        slug
        tags
        summary
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`

