import React from "react"
import * as styles from "./projects.module.scss"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Projects({projects}) {

  return (
    <section className={styles.projectWrapper}>
      <h2>Projects</h2>
      <div className={styles.projectsDiv}>
        {projects.map(item => {
          return (
            <div className={styles.project} key={item.id}>
              <Link to={"/projects/"+item.frontmatter.slug}>
                <Img fluid={item.frontmatter.thumb.childImageSharp.fluid} style={{'height' : '20rem'}}/>
                <div className={styles.projectContent}>
                <h3>{item.frontmatter.title}</h3>
                <span>{item.frontmatter.summary}</span>
                <br></br>
                <div>
                {item.frontmatter.tags.map(i => {
                  return <p className={styles.projectTags} key={i}>{i}</p>
                })}
              </div> 
              </div>
            </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}

