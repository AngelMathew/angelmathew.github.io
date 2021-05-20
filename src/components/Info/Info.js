import React, { useEffect } from "react"
import * as styles from "./Info.module.scss"
import DisplayPicture from "../../components/DisplayPicture/DisplayPicture"
import Button from "../Button/Button"
// import Skillset from "../../components/Skillset/Skillset"
// import Experience from "../../components/Experience/Experience"
// import AOS from "aos"
// import "aos/dist/aos.css";
import Wave from "../../images/wave.svg"

const Info = () => {
  // useEffect(() => {
  //     AOS.init({
  //     duration:'3000'
  //     });
  //   }, []);
  return (
    <>
      <div className={styles.info}>
        <div className={styles.infoSummary}>
          <div>
            <h5>
              Hi there
              <div className={styles.wave}>
                <img alt="Waving hand" src={Wave}></img>
              </div>
              ! my name is
            </h5>
          </div>
          <h1>Angel Anna Mathew</h1>
          <br></br>
          <p>
            I’m a Toronto based front-end developer, who enjoys building smooth
            UI/UX. I work with Angular/React to develop responsive, performant,
            and accessible web apps. Currently, I work at Bell Canada.
          </p>
          <br></br>
          <Button />
        </div>
        <DisplayPicture />
      </div>
      {/* <Skillset />
      <Experience /> */}
      {/* <Timeline/> */}
    </>
  )
}

export default Info
