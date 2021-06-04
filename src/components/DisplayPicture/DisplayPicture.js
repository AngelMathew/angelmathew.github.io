import React from "react"
import * as styles from "./DisplayPicture.module.scss"
import DisplayPhoto from "../../images/Dp.jpg"

const DisplayPicture = () => {
  return (
    <div className={styles.displayPicture}>
      <figure>
        <img
          src={DisplayPhoto}
          alt="Display Picture"
          loading="lazy"
          height="300px"
          width="100px"
        ></img>
      </figure>
    </div>
  )
}

export default DisplayPicture
