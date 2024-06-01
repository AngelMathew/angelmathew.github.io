import React, { useEffect } from "react"
import * as styles from "./Info.module.scss"
import DisplayPicture from "../../components/DisplayPicture/DisplayPicture"
import Button from "../Button/Button"
import Skillset from "../../components/Skillset/Skillset"
import Experience from "../../components/Experience/Experience"
import Projects from "../../components/Projects/Projects"
import AOS from "aos"
import "aos/dist/aos.css"

const Info = () => {
  useEffect(() => {
    AOS.init({
      duration: "1000",
    })
  }, [])
  return (
    <>
      <section className={styles.info} data-aos="fade">
        <div className={styles.infoSummary}>
          <div>
            <h5>
              Hi there
              <div className={styles.wave}> 👋 </div> ! I'm
            </h5>
          </div>
          <h1>Angel Anna Mathew,</h1>
          <br></br>
          <p>
            a Toronto based software developer, currently working at Rangle.io.
            I focus on crafting responsive, performant, and accessible digital
            experiences.
          </p>
          <br></br>
          <Button />
        </div>
        <DisplayPicture />
      </section>
      <Skillset />
      {/* <Projects/> */}
      <Experience />
    </>
  )
}

export default Info
