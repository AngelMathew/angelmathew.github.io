import React from "react"
import * as styles from "./projects.module.scss"
import Proj from "../../images/projectImageOne.jpg"
const skillset = [
  {
    id: 1,
    title: "Analog.JS & Contentful",
    tags: ["AnalogJS", "CMS", "Dynamic Components"],
  },
  { id: 2, title: "Angular & Strapi", tags: ["Angular", "CMS"] },
  { id: 3, title: "Chatbot", tags: ["GenAI", "Node.JS"] },
]
const Projects = () => {
  return (
    <section className={styles.projectWrapper}>
      <h2>Projects</h2>
      <div className={styles.projectsDiv}>
        {skillset.map(item => {
          return (
            <div className={styles.project}>
              <img src={Proj} loading="lazy" height="350px" width="280px" />
              <h3 key={item.id}>{item.title}</h3>
              <h4>summary</h4>
              <div>
                {item.tags.map(i => {
                  return <p className={styles.projectTags}>{i}</p>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
