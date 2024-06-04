import React from "react"
import * as styles from "./Button.module.scss"
const Button = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }
  return (
    <button className={styles.button} onClick={() => scrollToBottom()}>
      Let's connect
    </button>
  )
}

export default Button
