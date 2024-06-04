import React from "react"
import * as styles from "./Contact.module.scss"
import Arrow from "../../images/Arrow.svg"

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
const year=new Date().getFullYear();
  return (
    <div className={styles.contact} id="contact">
      <h4>Let's Connect</h4>
      <p className={styles.dropComment}>
        Drop me a comment, I would love to hear from you  ❤️ 
      </p>
      <div className={styles.icons}>
        <p className={styles.contactText}>Connect with me on </p>
        <a
          href="https://www.linkedin.com/in/angelannamathew"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="link to https://www.linkedin.com/in/angelannamathew"
        >
          <svg id="linkedin-mask" viewBox="0 0 64 64">
            <path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z"></path>
          </svg>
        </a>
        <p className={styles.contactText}>or send me an</p>
        <a
          href="mailto:angelannamathew07@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="angelannamathew07@gmail.com"
        >
          <svg id="email-mask" viewBox="0 0 64 64">
            <path d="M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z"></path>
          </svg>
        </a>
      </div>
      <hr></hr>

      <div className={styles.authorText}>
        <label>©{year} - designed and developed by Angel Anna Mathew</label>
        <button
          aria-label="Arrow"
          className={styles.scrollTopButton}
          onClick={() => scrollToTop()}
        >
          <img src={Arrow} alt="Up Arrow"></img>
        </button>
      </div>
    </div>
  )
}

export default Contact
