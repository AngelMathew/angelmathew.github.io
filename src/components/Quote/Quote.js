import React from "react"
import * as styles from "./quote.module.scss"

const Quote = () => {
  return (
    <div className={styles.blockquoteWrapper}>
  <div className={styles.blockquote}>
    <h3>
    The more I learn, the more I realize how much I don't know
     </h3>
    <span className={styles.highlighted}>&mdash;Albert Einstein</span>
  </div>
</div>
  )
}

export default Quote
