import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"
import Logo from "../../images/Logo.svg"

const Header = () => {
  const scrollToId = id => {
    const element = document.getElementById(id)
    element.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <header>
      <div className={styles.header}>
        
        <Link to="/" className={styles.textClass}>
          <img src={Logo} alt="Logo Image" className={styles.logo}></img>
        </Link>

        <ul className={styles.mainNavLink}>
          <li className={styles.navLinks}>
            <a
              className={styles.navLink}
              onClick={() => scrollToId("about")}
              aria-label="about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={styles.navLink}
              onClick={() => scrollToId("contact")}
              aria-label="contact"
            >
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
