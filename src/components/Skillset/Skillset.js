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
          I hail from a southern state in India called Kerala 🌴, and for the
          last few years I’ve been living in Canada. At Rangle, 
          I develop web app for a major American airline.
          Prior to Rangle, I worked at Bell Canada in their Field Services department, 
          where I developed (and occasionally designed) internal projects and web applications used by technicians and control centre agents in servicing Bell's end customers. 

        </span>
        <br></br>
        <span>
          I have 4+ years of experience in front-end development, where I
          specialize in translating UX mockups into responsive interfaces that
          work seamlessly across any device. I also occasionally design user
          experiences to high-fidelity prototypes.
        </span>
        <span>
          My interest in web development started in last years of my bachelor’s
          degree in Computer Science Engineering. Soon after graduation I
          started my career at Tata Consultancy Services (TCS), India as a
          front-end developer and worked on web applications using AngularJS,
          Angular, HTML5, CSS3, JavaScript.
        </span>
        <span>
          Apart from UI/UX, I have an interest in full-stack development, in
          particular, I enjoy coding in Python.
        </span>
        <br></br>
        <span aria-label="cooking, working out , watching dog cat and bunny videos">
          *In my off time, you will find me cooking, working out, or watching
          adorable animal videos, especially 🐶 🐱 🐰 .
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
