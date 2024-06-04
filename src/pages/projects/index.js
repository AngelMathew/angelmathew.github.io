import * as React from "react"
import { graphql,Link } from "gatsby"
import Layout from "../../components/layout"
import Img from "gatsby-image"


export default function ProjectPage({data}){
    const projects=data.allMarkdownRemark.nodes
  return (
    <Layout title="Angel Anna Mathew">
      <div>
     {projects.map(item=>(
            <Link to={"/projects/"+item.frontmatter.slug} key={item.id}>
                <h3>{item.frontmatter.title}</h3>
                <Img fluid={item.frontmatter.thumb.childImageSharp.fluid} />
            </Link>
     ))

     }
      </div>
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
