import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"
import Logo from "../../images/Logo.svg"
import { useLocation } from "@reach/router"

const Header = () => {
  const currentPath = useLocation().pathname
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }
  return (
    <header>
      <div className={styles.header}>
        {/* <div className={styles.textClass}><a href="/" aria-label="home"><img src={Logo} alt="Logo Image"></img></a></div>
        
        <ul className={styles.mainNavLink}>
            <li className={styles.navLinks}> <a  href="/"  aria-label="about"
            className={
              currentPath === "/"
                ? styles.navLink + " " + styles.selected
                : styles.navLink
            }>About</a></li>
            <li className={styles.navLink}>
                <a onClick={()=>scrollToBottom()}  aria-label="contact">Contact</a></li>
        </ul> */}

        <Link to="/" className={styles.textClass}>
          <img src={Logo} alt="Logo Image"></img>
        </Link>

        <ul className={styles.mainNavLink}>
          <li className={styles.navLinks}>
            <Link
              to="/"
              aria-label="about"
              className={
                currentPath === "/"
                  ? styles.navLink + " " + styles.selected
                  : styles.navLink
              }
            >
              About
            </Link>
          </li>
          <li className={styles.navLink}>
            <a onClick={() => scrollToBottom()} aria-label="contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
