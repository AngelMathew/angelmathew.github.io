import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Header from "../components/header/header"
import Contact from "../components/Contact/Contact"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title } = data.markdownRemark.frontmatter
  const { summary } = data.markdownRemark.frontmatter
  const { featuredImg } = data.markdownRemark.frontmatter
  const showData = false
  return (
    <Layout title={title} description={summary}>
      <>
        <Header $showdata={showData} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            marginTop: "1em",
          }}
        >
          <Img
            fluid={featuredImg.childImageSharp.fluid}
            style={{ height: "20rem", gridColumn: "2 / 12" }}
          />

          <div
            style={{ gridColumn: "2 / 12", padding: "1rem 0" }}
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
        <footer>
          <Contact />
        </footer>
      </>
    </Layout>
  )
}
export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        summary
        featuredImg {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
