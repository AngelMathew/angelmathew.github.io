import React from "react"
import * as styles from "./Splash.module.scss"
import Logo from "../../images/Logo.svg"

const Splash = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div className={styles.splashScreen}>
    <div className={styles.element}>
    <img src={Logo} alt="Logo Image"></img>
      
    </div>
    </div>
  )
}

export default Splash
