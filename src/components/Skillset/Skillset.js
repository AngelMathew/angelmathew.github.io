import React, { useEffect } from "react"
import * as styles from "./Skillset.module.scss"
import Vector from "../../images/Vector.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import Quote from "../Quote/Quote"
import Contentful from "../../images/contentful.png"

const Skillset = () => {
  useEffect(() => {
    AOS.init({
      duration: "500",
    })
  }, [])
  const skillset = [
    { id: 1, skill: "Node.JS" },
    { id: 2, skill: "Jest" },
    { id: 3, skill: "NgRx" },
    { id: 4, skill: "Python" },
    { id: 5, skill: "Strapi" },
    { id: 6, skill: "D3.JS" },
    { id: 11, skill: "Vuex" },
    { id: 12, skill: "Vue Test Utils" },
    { id: 7, skill: "Analog.JS" },
    { id: 8, skill: "Gatsby" },
    { id: 9, skill: "Ionic" },
    { id: 10, skill: "k6" },
  ]
  return (
    <section className={styles.skillSet} data-aos="fade-in">
      <div className={styles.skillSetSummary} id="about">
        <img
          className={styles.backgroundImage}
          src={Vector}
          alt="Background"
        ></img>
        <h2>About</h2>
        <span>
          I hail from a southern state in India called Kerala 🌴, and I've been
          residing in Canada for the past few years. At Rangle, I develop web
          apps for a major American airlines. Before Rangle, I worked at Bell
          Canada in their Field Services department, where I developed in-house
          projects and web applications used by technicians and control center
          agents in servicing Bell's end customers.
        </span>
        <br></br>
        <span>
          Over the past six years, I've honed my skills in software development,
          specializing in Angular, Node.JS, Nest.JS, Vue, React, and Python. My
          work has spanned diverse sectors, including airlines, automotive,
          electronics, pharmaceutical, and telecommunication. This unique
          exposure has allowed me to master the art of balancing solutions
          between customer needs and user experience.
        </span>
        <br></br>
        <span>
          My journey into web application development began in the final years
          of my bachelor's degree in Computer Science Engineering. After
          graduation, I joined Tata Consultancy Services, as a developer. The
          experience of working alongside exceptional colleagues, mentors, and
          clients has been instrumental in my professional growth and learning. 
        </span>
        <Quote></Quote>
        <h2>Skills</h2>
        <span>
          I work with various programming languages and frameworks, including{" "}
          <span className={styles.highlighted}>
            JavaScript, TypeScript, Angular, Nest.JS, React.JS, and Vue.JS
          </span>
          . I'm also interested in content management systems (CMS) and I'm a{" "}
          <span className={styles.highlighted}>
            Contentful Cerified Professional.
          </span>{" "}
          <img
            src={Contentful}
            alt="Display Picture"
            loading="lazy"
            height="25px"
            width="25px"
          ></img>
          <br></br>Besides these skills, I'm proficient in tools and
          technologies including :
        </span>
        <br></br>

        <ul className={styles.skillSetList}>
          {skillset.map(item => {
            return <li key={item.id}>{item.skill}</li>
          })}
        </ul>
      </div>
    </section>
  )
}

export default Skillset
