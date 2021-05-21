import React from "react"
import * as styles from "./Button.module.scss"
const Button = () => {
  const scrollToBottom = () => {
    console.log("clicked")
    window.scrollTo(0, document.body.scrollHeight)
  }
  return (
    <button className={styles.button} onClick={() => scrollToBottom()}>
      Let's chat
    </button>
  )
}

export default Button
