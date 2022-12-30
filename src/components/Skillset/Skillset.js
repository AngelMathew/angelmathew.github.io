import React, { useEffect } from "react"
import * as styles from "./Skillset.module.scss"
import Vector from "../../images/Vector.svg"
import AOS from "aos"
import "aos/dist/aos.css"

const Skillset = () => {
  useEffect(() => {
    AOS.init({
      duration: "500",
    })
  }, [])

  return (
    // <div className={styles.skillSet}>
    <section className={styles.skillSet} data-aos="fade-in">
      <div className={styles.skillSetSummary}>
        <img
          className={styles.backgroundImage}
          src={Vector}
          alt="Background"
        ></img>
        <h2>About</h2>
        <span>
        I hail from a southern state in India called Kerala 🌴, and I have been residing in Canada for the past few years. At Rangle, I develop web apps for a major American airline. Prior to Rangle, I worked at Bell Canada in their Field Services department, where I developed in-house projects and web applications used by technicians and control center agents in servicing Bell's end customers. 

        </span>
        <br></br>
        <span>
        I have spent the past 5 years in front-end development, specializing in Angular, Vue.js, and React. I worked for clients in the automotive, electronics, pharmaceutical, and telecommunications sectors. This diverse exposure allowed me to balance solutions between customer needs and user experience.
        </span>
        <span>
        I felt drawn towards web application development in the last years of my bachelor's degree in Computer Science Engineering. Soon after graduation, I worked for Tata Consultancy Services (TCS), an IT/consulting firm based in India, as a developer. I have been fortunate to work alongside many amazing co-workers, mentors, and clients who have supported me in learning and growing.
        </span>
        <br></br>
        <span>
          <q><b>The more I learn, the more I realize how much I don't know</b></q>
          
          
          &nbsp; &mdash; Albert Einstein</span>
        
        <br></br>
        <span aria-label="cooking,hiking, petting dogs">
          *In my downtime, I enjoy hiking/biking at nearby trails with my partner, watching Netflix, cooking, trying out new recipes, and petting my neighbor's dog, 'Chikku' 🐶  .
        </span>
        <h3>Skills :</h3>

        <div className={styles.lineVerical}></div>

        <ul className={styles.skillSetList}>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Angular</li>
          <li>Python</li>
          <li>Ionic</li>
          <li>Modern (S)CSS</li>
          <li>HTML5</li>
          <li>Gatsby</li>
          <li>UI/UX Design</li>
          <li>Contentful</li>
          <li>WordPress</li>
          <li>Strapi</li>
        </ul>
      </div>
    </section>
  )
}

export default Skillset
